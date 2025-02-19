import React from 'react'
import Heading from '../../Components/Heading/Heading'
import './Privacy_Policies.css.css'
const Privacy_Polices = () => {
    return (
        <div>
            <Heading heading={'Privacy Policy'} subtitle={'This Privacy Policy outlines how we collect, use, protect, and disclose your personal information when you interact with our website and services. We are deeply committed to protecting your privacy and ensuring that your personal data is handled with the utmost care and security. By using our website, you consent to the practices described in this Privacy Policy.'} />
            <div className="privacy_details">
                <h1> <h1>Information We Collect</h1></h1>
                <span>We collect information from you when you visit our website, register for our services, fill out a form, or engage in communication with us. The types of personal information we may collect include:</span>
                <div className="details">
                    <li>Personal Identifiable Information (PII): <p>This includes your name, email address, phone number, mailing address, and any other information you provide to us when filling out forms or interacting with our website.</p></li>
                    <li>Non-Personal Identifiable Information (Non-PII):<p>We may also collect data that does not personally identify you, such as your IP address, browser type, device information, and usage data about how you interact with our website (e.g., pages viewed, time spent on site).</p></li>
                    <li>Cookies:<p>Our website uses cookies to enhance user experience. Cookies are small files stored on your device that help us recognize your preferences, improve website functionality, and track user behavior on our site for analytical purposes. You can choose to accept or decline cookies through your browser settings.</p></li>
                </div>
                <span>We collect this information for the purpose of providing services, improving your experience, and ensuring that our platform functions effectively and securely.</span>
                <h1>How We Use Your Information</h1>
                <span>The information we collect serves several purposes, including but not limited to:</span>
                <div className="details">
                    <li>Providing and Improving Services:
                        <p>We use your information to provide the services you have requested, such as processing your registration, managing your account, and providing customer support.</p>
                    </li>
                    <li>Personalizing User Experience:
                        <p>We may use your information to customize content, advertisements, and services based on your preferences and behavior on our platform.</p>
                    </li>
                    <li>Communicating with You:
                        <p>We may contact you regarding updates, changes to our services, new features, or to respond to any queries or requests you make. We will ensure that these communications are relevant and useful to you.</p>
                    </li>
                    <li>Marketing:
                        <p>With your consent, we may send marketing communications, including promotions, newsletters, or updates about our products and services. You can opt out of receiving these at any time by following the instructions in each email.</p>
                    </li>
                    <li>Legal Compliance:
                        <p>We may also use your information to comply with legal obligations, enforce our terms of service, or protect our rights, property, or safety, as well as the rights of others.</p>
                    </li>
                </div>
                <span>We will only use your information for the purposes for which it was collected, and we will not use your personal data for any other purpose without your consent, unless required by law.</span>
                <h1>Sharing Your Information</h1>
                <span>We understand the importance of keeping your personal information confidential. We do not sell, rent, or trade your personal data to third parties. However, we may share your information in the following circumstances:</span>
                <div className="details">
                    <li>With Service Providers:
                        <p>We may share your information with trusted third-party service providers who assist us in operating our website, conducting business activities, or providing services to you. These service providers are bound by confidentiality agreements and are not allowed to use your personal data for any other purpose.</p>
                    </li>
                    <li>With Your Consent:
                        <p>If you have given us explicit consent, we may share your information for a specific purpose.</p>
                    </li>
                    <li>For Legal and Regulatory Compliance
                        <p>We may disclose your information to comply with legal obligations, such as to respond to subpoenas, court orders, or government requests. This may also include sharing your information to protect against fraud or enforce our terms of service.</p>
                    </li>
                    <li>In Case of Merger or Acquisition:
                        <p>If we are involved in a merger, acquisition, or sale of assets, your information may be transferred to the new owner as part of the transaction. We will notify you of such changes and provide you with the option to opt out of services if applicable.</p>
                    </li>

                </div>
                <span>We will never sell or rent your personal data to third parties for their own marketing purposes without your explicit consent.</span>
                <h1>Your Choices and Control Over Your Information</h1>
                <span>You have the right to access, correct, and delete your personal information at any time. In addition, you have the following rights:</span>
                <div className="details">
                    <li>Access and Correction:
                        <p>You can request access to the personal information we have about you, and if necessary, update or correct any inaccuracies in that data.</p>
                    </li>
                    <li>Deletion:
                        <p>You may request that we delete your personal information, subject to certain exceptions (such as for compliance with legal obligations or business records).</p>
                    </li>
                    <li>Opting Out of Marketing:
                        <p> If you no longer wish to receive marketing emails, you can unsubscribe by clicking the unsubscribe link at the bottom of each email or updating your preferences in your account settings.</p>
                    </li>
                    <li>Data Portability:
                        <p> You may request a copy of your personal information in a structured, commonly used format for transfer to another organization.</p>
                    </li>
                    <li>Withdraw Consent:
                        <p>You may withdraw your consent to our use of your data for certain purposes at any time, without affecting the legality of any processing done before the withdrawal.</p>
                    </li>
                </div>
                <span>To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.</span>
                <h1>Data Security</h1>
                <span>We take the security of your personal information seriously. We implement a variety of security measures, including encryption and firewalls, to protect your data from unauthorized access, alteration, or disclosure. However, please be aware that no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security. <br />

                    If you suspect that your account or personal data has been compromised, please contact us immediately so we can take appropriate action.</span>
                <h1>Changes to this Privacy Policy</h1>
                <span>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we are protecting your personal information. <br />


                    If we make significant changes to this policy, we will notify you by email or through a prominent notice on our website. Your continued use of our services after such changes signifies your acceptance of the revised Privacy Policy.</span>
                <h1>Contact Us</h1>
                <span>If you have any questions, concerns, or requests regarding our Privacy Policy or how we handle your personal information, please contact us at the following:</span>
                <div className="details">
                    <li>Contact Name:
                        <p> Add</p>
                    </li>
                    <li>Email:
                        <p>Add Here</p>
                    </li>
                </div>
                <span>We value your privacy and are committed to addressing any concerns you may have regarding the protection of your personal data.</span>
            </div>

        </div>
    )
}

export default Privacy_Polices