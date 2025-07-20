'use client';

import { useState } from 'react';
import UsernameStep from './steps/UsernameStep';
import ProfileImageStep from './steps/ProfileImageStep';
import SocialStep from './steps/SocialLinksStep';
import ThemeStep from './steps/ThemeStep';
import PreviewStep from './steps/PreviewStep';

export default function RegistrationStepper({
    initialUsername = '',
    checkUsername,
    isUsernameTaken = '',
    register,
}) {
    const [username, setUsername] = useState(initialUsername);
    const [imageFile, setImageFile] = useState(null);
    const [step, setStep] = useState(1);
    const [socialLinks, setSocialLink] = useState({
        instagram: '',
        x: '',
        tiktok: '',
        github: '',
    });
    const [fontAndTheme, setFontAndTheme] = useState({
        theme: '#ffffff',
        font: '',
    });
    const [about, setAbout] = useState({ fullname: '', bio: '' });

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleUsername = async () => {
        const res = await checkUsername(username);
        if (res) nextStep();
    };

    const handleProfileImage = async (file) => {
        setImageFile(file);
        nextStep();
    };

    const handleSubmit = () => {
        const data = {
            username,
            imageFile,
            socialLinks,
            backgroundColor: fontAndTheme.theme,
            font: fontAndTheme.font,
            fullname: about.fullname,
            bio: about.bio,
        };
        register(data);
    };

    return (
        <div className="pt-16 max-w-xl mx-auto p-4">
            {step === 1 && (
                <UsernameStep
                    username={username}
                    nextStep={handleUsername}
                    onUsernameChange={(value) => setUsername(value)}
                    isUsernameTaken={isUsernameTaken}
                />
            )}
            {step === 2 && (
                <ProfileImageStep
                    nextStep={handleProfileImage}
                    prevStep={prevStep}
                    file={imageFile}
                    about={about}
                    setAbout={setAbout}
                />
            )}
            {step === 3 && (
                <SocialStep
                    nextStep={nextStep}
                    prevStep={prevStep}
                    socials={socialLinks}
                    setSocials={setSocialLink}
                />
            )}
            {step === 4 && (
                <ThemeStep
                    nextStep={nextStep}
                    prevStep={prevStep}
                    fontAndTheme={fontAndTheme}
                    setFontAndTheme={setFontAndTheme}
                />
            )}
            {step === 5 && (
                <PreviewStep
                    nextStep={nextStep}
                    prevStep={prevStep}
                    imageFile={imageFile}
                    username={username}
                    about={about}
                    socials={socialLinks}
                    fontAndTheme={fontAndTheme}
                    submit={handleSubmit}
                />
            )}
        </div>
    );
}
