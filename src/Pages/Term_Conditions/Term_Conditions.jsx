import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../Components/Heading/Heading';
import './Term_Conditions.css';

const Term_Conditions = () => {
    return (
        <div className="terms-container">
            <Heading 
                heading="Terms and Conditions" 
                subtitle="These Terms and Conditions govern your use of our website and services. By accessing or using our internship program services, you agree to comply with and be bound by these Terms. Please read them carefully before using our services."
            />

            <div className="term-section">
                <h2 className="term-title">1. Acceptance of Terms</h2>
                <p className="term-desc">
                    By using our internship program services or accessing our website, you agree to these Terms and Conditions. 
                    If you do not agree to these Terms, you must refrain from enrolling or using our services.
                </p>
            </div>

            <div className="term-section">
                <h2 className="term-title">2. Changes to Terms</h2>
                <p className="term-desc">
                    We reserve the right to update or modify these Terms at any time without prior notice. Any changes will be posted on this page 
                    with the updated 'Last Revised' date. Your continued use of the website after changes have been made will constitute your acceptance of the new terms.
                </p>
            </div>

            <div className="term-section">
                <h2 className="term-title">3. Internship Enrollment</h2>
                <p className="term-desc">
                    To participate in the internship program, you must complete the enrollment process, which includes providing personal details, 
                    submitting necessary documents, and agreeing to the Terms and Conditions. The internship program is subject to availability and may be 
                    limited based on the number of open spots.
                </p>
            </div>

            <div className="term-section">
                <h2 className="term-title">4. ID Card Purchase</h2>
                <p className="term-desc">
                    All interns must purchase an ID card to participate in the internship program. The cost of the ID card is mandatory and must be paid in advance. 
                </p>
                <ul className="term-list">
                    <li>Free ID Card - ₹100</li>
                    <li>Premium ID Card - ₹200</li>
                </ul>
            </div>

            <div className="term-section">
                <h2 className="term-title">5. Payment and Pricing</h2>
                <p className="term-desc">
                    Payments for the internship program, ID card, and training programs must be made in full before the start of the program.
                </p>
                <h3 className="sub-heading">Available Training Programs:</h3>
                <ul className="term-list">
                    <li>3-Month Training Program - ₹500</li>
                    <li>6-Month Training Program - ₹700</li>
                </ul>
            </div>

            <div className="term-section">
                <h2 className="term-title">6. Internship Program Details</h2>
                <p className="term-desc">
                    The internship program includes both theoretical learning and hands-on experience. Interns must adhere to the schedule and complete all assignments.
                </p>
            </div>

            <div className="term-section">
                <h2 className="term-title">7. Confidentiality and Intellectual Property</h2>
                <p className="term-desc">
                Interns agree to maintain the confidentiality of all proprietary information shared during the internship. Any intellectual property created during the internship, including but not limited to software, designs, documents, or research, will remain the sole property of the internship provider unless otherwise agreed upon.
                </p>
            </div>

            <div className="term-section">
                <h2 className="term-title">8. Responsibilities of Interns</h2>
                <p className="term-desc">Interns are required to:</p>
                <ul className="term-list">
                    <li>Comply with all program rules and guidelines.</li>
                    <li>Complete all assigned tasks, projects, and assessments.</li>
                    <li>Behave professionally and respect the confidentiality of company data and client information.</li>
                    <li>Attend mandatory meetings, workshops, and training sessions as required.</li>
                    <li>Communicate effectively with your mentor or supervisor during the internship period.</li>
                </ul>
            </div>

            <div className="term-section">
                <h2 className="term-title">9. Termination of Internship</h2>
                <p className="term-desc">
                The internship provider reserves the right to terminate the internship at any time if the intern fails to meet the performance expectations, violates the Terms and Conditions, or engages in unethical behavior. In the event of termination, no refunds will be provided.                </p>
            </div>

            <div className="term-section">
                <h2 className="term-title">10. Refund Policy</h2>
                <p className="term-desc">
                The internship program fees are non-refundable once the program has started. If an intern wishes to withdraw from the program prior to the start, they may request a refund, subject to a processing fee. Please refer to the specific refund policy on the website for more details.                </p>
            </div>

            <div className="term-section">
                <h2 className="term-title">11. Privacy and Data Protection</h2>
                <p className="term-desc">
                Your personal information will be collected and processed in accordance with our <Link to='/privacy_policies'>Privacy Policy</Link>. We take all necessary steps to protect your data and ensure that your personal information is kept secure.                </p>
            </div>

            <div className="term-section">
                <h2 className="term-title">12.Limitation of Liability</h2>
                <p className="term-desc">
                The internship provider is not liable for any damages or losses incurred by the intern as a result of their participation in the internship program. This includes but is not limited to direct, indirect, incidental, or consequential damages arising from delays, performance issues, or interruptions to the program.                </p>
            </div>
            <div className="term-section">
                <h2 className="term-title">13. Governing Law</h2>
                <p className="term-desc">
                The internship These Terms and Conditions are governed by the laws of India. Any disputes arising out of these Terms will be subject to the exclusive jurisdiction of the courts in India.provider is not liable for any damages or losses incurred by the intern as a result of their participation in the internship program. This includes but is not limited to direct, indirect, incidental, or consequential damages arising from delays, performance issues, or interruptions to the program.                </p>
            </div>

            <div className="term-section">
                <h2 className="term-title">14. Contact Information</h2>
                <p className="term-desc">
                    For any queries regarding the Terms and Conditions, contact us at <a href="mailto:support@example.com">govindbhokare007@gmail.com</a>.
                </p>
            </div>
        </div>
    );
}

export default Term_Conditions;
