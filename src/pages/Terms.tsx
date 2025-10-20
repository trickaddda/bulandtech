import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-fit mx-auto mb-6">
            <FileText className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last Updated: January 2025</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using BulandTech's services, you agree to be bound by these Terms and 
              Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Services</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                BulandTech provides digital services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Mobile app development (Android, iOS)</li>
                <li>Desktop software development</li>
                <li>Website development and design</li>
                <li>Graphic design and logo creation</li>
                <li>Music production and audio services</li>
                <li>Video editing and production</li>
                <li>Digital marketing and SEO</li>
                <li>AI tools and automation solutions</li>
              </ul>
              <p>
                All services are subject to availability and may be modified or discontinued at any time.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Project Process</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong>3.1 Quotations:</strong> All quotes are valid for 30 days unless otherwise specified. 
              Prices may vary based on project scope and requirements.</p>
              
              <p><strong>3.2 Project Acceptance:</strong> A project begins only after mutual agreement on 
              scope, timeline, and payment terms, typically formalized through a contract or written agreement.</p>
              
              <p><strong>3.3 Revisions:</strong> Each project includes a specified number of revision rounds. 
              Additional revisions may incur extra charges.</p>
              
              <p><strong>3.4 Timeline:</strong> Delivery timelines are estimates and may vary based on project 
              complexity and client responsiveness. Delays caused by client feedback or content provision 
              may extend the timeline.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong>4.1 Payment Schedule:</strong> Projects typically require:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>50% advance payment before project commencement</li>
                <li>50% final payment upon project completion and approval</li>
              </ul>
              <p>Large projects may have milestone-based payment schedules.</p>
              
              <p><strong>4.2 Payment Methods:</strong> We accept bank transfers, UPI, and other digital 
              payment methods as mutually agreed.</p>
              
              <p><strong>4.3 Late Payments:</strong> Late payments may result in project suspension until 
              payment is received. Interest may be charged on overdue amounts.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Refund Policy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong>5.1 Advance Payments:</strong> Advance payments are non-refundable once work has 
              commenced, except in cases where BulandTech is unable to deliver the agreed services.</p>
              
              <p><strong>5.2 Cancellations:</strong> If a client cancels a project mid-way, payment will be 
              calculated based on work completed up to that point.</p>
              
              <p><strong>5.3 Dissatisfaction:</strong> We strive for 100% satisfaction. If you're unhappy 
              with the deliverables, we'll work with you through the agreed revision process. Refunds are 
              considered on a case-by-case basis.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong>6.1 Ownership Transfer:</strong> Upon full payment, all intellectual property 
              rights of the final deliverables transfer to the client, unless otherwise agreed.</p>
              
              <p><strong>6.2 Portfolio Use:</strong> BulandTech reserves the right to showcase completed 
              projects in our portfolio unless a non-disclosure agreement specifies otherwise.</p>
              
              <p><strong>6.3 Third-Party Assets:</strong> Any third-party assets (fonts, images, plugins) 
              used in projects require appropriate licensing by the client.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Client Responsibilities</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Clients are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing accurate and complete project requirements</li>
                <li>Timely provision of content, feedback, and approvals</li>
                <li>Ensuring they have rights to all content provided to us</li>
                <li>Testing and approving deliverables within agreed timeframes</li>
                <li>Maintaining backups of all delivered files</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Warranties and Disclaimers</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong>8.1 Quality Assurance:</strong> We guarantee our work meets professional industry 
              standards and matches agreed specifications.</p>
              
              <p><strong>8.2 Support Period:</strong> Post-delivery support is provided for a specified 
              period (typically 30 days) for bug fixes. Feature additions or modifications are separate projects.</p>
              
              <p><strong>8.3 Third-Party Services:</strong> We are not responsible for issues arising from 
              third-party services, platforms, or hosting providers.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              BulandTech's liability is limited to the total amount paid for the specific service. We are 
              not liable for indirect, incidental, or consequential damages arising from use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              We maintain strict confidentiality of all client information and project details. We will not 
              disclose any confidential information to third parties without explicit permission, except as 
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              Either party may terminate services with written notice. Upon termination, payment for work 
              completed will be due, and any work-in-progress will be provided to the client in its current state.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms are governed by the laws of India. Any disputes will be subject to the exclusive 
              jurisdiction of courts in Bulandshahr, Uttar Pradesh, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of our services after 
              changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms & Conditions, please contact:
            </p>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p><strong>BulandTech</strong></p>
              <p><strong>Email:</strong> theuntoldtales8265@gmail.com</p>
              <p><strong>Phone:</strong> +91 82659 99762</p>
              <p><strong>Location:</strong> Bulandshahr, Uttar Pradesh, India</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
