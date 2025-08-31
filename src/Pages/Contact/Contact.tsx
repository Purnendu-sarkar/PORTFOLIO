import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_u7m8t3e", 
        "template_b4fmcku", 
        form.current,
        "U0TjnH4hiEr0BUQQu"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            description:
              "Thank you for reaching out! I'll get back to you soon.",
          });
          setFormData({
            user_email: "",
            user_name: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send message!", {
            description: error.text,
          });
        }
      );
  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </Button>
        </form>

        {/* Direct Contact Info */}
        <div className="text-gray-300 text-center mt-6">
          <p>
            Email:{" "}
            <a
              href="mailto:dsr102.purnendu@gmail.com"
              className="text-purple-400 hover:underline"
            >
              dsr102.purnendu@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+8801409012843"
              className="text-purple-400 hover:underline"
            >
              +8801409012843
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
