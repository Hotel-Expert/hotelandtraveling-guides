import Image from "next/image";

import ContactForm from "@/components/blocks/contact-us/contact-form";
import { Card, CardContent } from "@/components/ui/card";

const ContactUs = () => {
  return (
    <section className="bg-muted py-8 sm:py-16 lg:h-dvh lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center sm:mb-16">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Get in touch for inquiries, corrections, or partnerships
          </h2>
          <p className="text-muted-foreground text-xl">
            Send us a message to report inaccuracies, submit editorial inquiries,
            or suggest travel and hotel topics worth covering.
          </p>
        </div>

        <Card className="border-none shadow-none">
          <CardContent className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <ContactForm />
            </div>

            <div className="shadow-none md:col-span-2">
              <Image
                src="/images/contact-us.webp"
                alt="Contact illustration"
                width={1120}
                height={880}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="size-full rounded-xl border object-cover max-md:max-h-70"
                priority
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactUs;
