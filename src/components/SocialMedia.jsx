import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebook, FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href={'https://www.linkedin.com/in/wangyangxu/'}>
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a href={'https://github.com/ryanxwy'}>
                <AiFillGithub />
            </a>
        </div>
        <div>
            <a href={'https://www.facebook.com/profile.php?id=100073226528384'}>
                <FaFacebookF />
            </a>
        </div>
    </div>
);

export default SocialMedia;