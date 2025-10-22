import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({_Id: user._id, role: user.role,  },
            process.env.JWT_KEY, { expiresIn: '10d' }
        )

        res.status(200).json({ success: true, token, 
            user: { _Id: user._id, name: user.name, role: user.role },
         });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }   


}

const verify = (req, res) => {
    res.status(200).json({ success: true, user: req.user });
}

export { login , verify };