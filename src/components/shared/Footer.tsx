import { Accessibility, ArrowRight, Euro, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-[#111617] text-[#E2E8F0]">
      <Container>
        <div className="grid grid-cols lg:grid-cols-6 py-20 border-b-[1px]">
          <div>
            <h1 className="text-3xl font-bold">
              Event <span className="gradient-text">360</span>
            </h1>
          </div>
          <div className="flex flex-col">
            <Link to="#" className="py-3 text-white font-medium">
              Product
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Pricing
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Overview
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Browse
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Accessibility
            </Link>
          </div>
          <div className="flex flex-col">
            <Link to="#" className="py-3 text-white font-medium">
              Solutions
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Brainstorming
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Ideation
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Wireframing
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Research
            </Link>
          </div>
          <div className="flex flex-col">
            <Link to="#" className="py-3 text-white font-medium">
              Resources
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Help Center
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Blog
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Tutorials
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              FAQs
            </Link>
          </div>
          <div className="flex flex-col">
            <Link to="#" className="py-3 text-white font-medium">
              Support
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Contact Us
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Developers
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Documentation
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Integrations
            </Link>
          </div>
          <div className="flex flex-col">
            <Link to="#" className="py-3 text-white font-medium">
              Company
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              About
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Press
            </Link>
            <Link to="#" className="py-3 text-white font-medium">
              Events
            </Link>
            <Link to="#" className="py-3 text-white font-medium flex gap-x-2">
              Request Demo <ArrowRight />
            </Link>
          </div>
        </div>
        <div className="py-[37px] grid grid-cols md:grid-cols-6">
          <div className="md:col-span-4">
            <p> @ 2023. All rights reserved.</p>
          </div>
          <div className="md:col-span-2 w-full flex flex-wrap md:flex-nowrap justify-center md:justify-end space-x-[32px]">
            <Link to="#">Terms</Link>
            <Link to="#">Privacy</Link>
            <Link to="#">Contact</Link>
            <Link to="#" className="flex gap-2">
              <Globe />
              EN
            </Link>
            <Link to="#" className="flex gap-2">
              <Euro />
              EUR
            </Link>
            <Link to="#">
              <Accessibility />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
