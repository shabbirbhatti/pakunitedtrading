const Terms = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Pak United Trading Corporation Japan, you agree to
              be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Services</h2>
            <p>
              We provide automotive services including vehicle sales, spare parts, repairs, and import/export
              services. All services are subject to availability and our professional assessment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Pricing and Payment</h2>
            <p>
              All prices are subject to change without notice. Payment terms will be communicated at the time of
              service quotation. We reserve the right to refuse service for non-payment or breach of terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Warranties and Disclaimers</h2>
            <p>
              We provide warranties on our services as communicated at the time of service. We strive for quality
              but are not liable for issues arising from normal wear and tear, misuse, or circumstances beyond our
              control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Pak United Trading Corporation Japan shall not be liable for
              any indirect, incidental, special, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of Japan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-2">
              Email: info@pakunitedjapan.com<br />
              Phone: +81 90-7421-0923<br />
              Location: Tokyo, Japan
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
