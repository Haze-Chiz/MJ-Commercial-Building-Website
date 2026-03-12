import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { base44 } from "@/api/base44Client";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSending(true);

    const body = `
New inquiry from MJ Commercial Building website:

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Interested In: ${form.interest}
Message: ${form.message}
    `.trim();

    await base44.integrations.Core.SendEmail({
      to: form.email,
      subject: `MJ Building Inquiry from ${form.name}`,
      body,
    });

    toast.success("Inquiry sent successfully!");
    setForm({ name: "", phone: "", email: "", interest: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Interested in renting a commercial space or dorm bedspace? 
              Reach out and we'll get back to you promptly.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-foreground">0910-036-8156</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">mjcommercialbuilding@email.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-semibold text-foreground">
                    BLK 3 Lot 1 Phase B, Brgy. Francisco Homes – Mulawin,
                    <br />
                    San Jose Del Monte, Bulacan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border space-y-5"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Send an Inquiry
              </h3>

              <Input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="h-12"
              />
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="h-12"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="h-12"
              />
              <Select
                value={form.interest}
                onValueChange={(val) => handleChange("interest", val)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Interested In" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="commercial">Commercial Lot</SelectItem>
                  <SelectItem value="dorm">Dorm Bedspace</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Your message..."
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="min-h-[120px] resize-none"
              />
              <Button
                type="submit"
                disabled={sending}
                className="w-full h-12 rounded-xl text-sm font-semibold"
              >
                {sending ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <Send className="w-4 h-4 mr-2" />
                )}
                {sending ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}