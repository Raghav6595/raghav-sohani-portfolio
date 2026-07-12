import {
  Mail,
  Download,
} from "lucide-react";

import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { contact } from "../../../content/contact";

const ContactInfo = () => {
  return (
    <div className="mt-12">

      <p className="mb-12 max-w-2xl text-lg leading-8 text-gray-600">
        {contact.description}
      </p>

      <div className="flex max-w-md flex-col gap-5">

        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-blue-500 hover:shadow-md"
        >
          <Mail size={22} className="text-blue-600" />

          <span>{contact.email}</span>
        </a>

        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-blue-500 hover:shadow-md"
        >
          <FaLinkedin
            size={22}
            className="text-[#0A66C2]"
          />

          <span>LinkedIn</span>
        </a>

        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-blue-500 hover:shadow-md"
        >
          <FaGithub size={22} />

          <span>GitHub</span>
        </a>

        <a
          href={contact.resume}
          className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-blue-500 hover:shadow-md"
        >
          <Download size={22} className="text-blue-600" />

          <span>Download Resume</span>
        </a>

      </div>

    </div>
  );
};

export default ContactInfo;