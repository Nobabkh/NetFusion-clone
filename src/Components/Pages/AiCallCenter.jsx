import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

const AiCallCenter = () => {
  return (
    <div className="p-[2rem] md:p-[2rem]">
      <div className="py-32 lg:container lg:max-w-screen-xl lg:mx-auto">
        <div className="mb-28">
          <SectionHeader
            title="The Future of AI-Driven Customer Service"
            sectionName="AI Call Center"
          ></SectionHeader>
        </div>
        <div className="grid grid-cols-1 lg:flex gap-10">
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/n8scOCgWcHQ?si=N-_2dWOEIb8r3SQg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="text-base font-medium text-[#FFFFFFCC]">
            <p>
              Introducing our groundbreaking AI Call Agent – the result of five
              months of relentless innovation and development. Powered by
              cutting-edge artificial intelligence technology, our AI Call Agent
              is poised to revolutionize customer service as we know it. <br />
              <br />
              Our AI Call Agent is a sophisticated virtual assistant designed to
              handle customer inquiries with speed, accuracy, and a touch of
              human-like interaction. Utilizing advanced natural language
              processing (NLP) algorithms, our AI seamlessly understands and
              responds to customer queries, providing instant resolutions and
              information.<br />
              <br />
              In a world where customer expectations are constantly evolving, our AI Call Agent is the beacon of innovation, efficiency, and unparalleled customer experience. Join us in shaping the future of customer service with our transformative AI solution.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-white mt-10 mb-5">
            Use Cases
          </h1>
          <div>
            <p className="text-base font-medium text-[#FFFFFFCC] mb-5">
              <span className="text-lg font-semibold text-white">
                Customer Support:
              </span>{" "}
              Our AI Call Agent serves as the frontline support representative,
              handling a wide range of customer inquiries, from product
              information requests to technical troubleshooting.
            </p>
            <p className="text-base font-medium text-[#FFFFFFCC] mb-5">
              <span className="text-lg font-semibold text-white">
                Appointment Scheduling:
              </span>{" "}
              With its ability to access and update calendars in real-time, our
              AI Call Agent streamlines appointment scheduling processes,
              reducing administrative burden and enhancing efficiency.
            </p>
            <p className="text-base font-medium text-[#FFFFFFCC] mb-5">
              <span className="text-lg font-semibold text-white">
                Order Status Updates:
              </span>{" "}
              Customers can effortlessly inquire about the status of their
              orders, receive real-time updates, and even make modifications
              using our AI Call Agent.
            </p>
            <p className="text-base font-medium text-[#FFFFFFCC] mb-5">
              <span className="text-lg font-semibold text-white">
                FAQ Assistance:
              </span>{" "}
              Frequently asked questions are no match for our AI Call Agent,
              which intelligently provides relevant information and guides
              customers through common queries.
            </p>
            <p className="text-base font-medium text-[#FFFFFFCC]">
              <span className="text-lg font-semibold text-white">
                Lead Generation:
              </span>{" "}
              By engaging customers in meaningful conversations, our AI Call
              Agent captures valuable lead information, qualifying prospects and
              nurturing relationships.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-semibold text-white mt-10 mb-5">
            Automation Features
          </h1>
          <div>
            <p className="text-base font-medium text-[#FFFFFFCC] mb-5">
              <span className="text-lg font-semibold text-white">
              Task Automation:
              </span>{" "}
              Our AI Call Agent automates repetitive tasks such as data entry, form filling, and appointment reminders, freeing up human agents to focus on more complex issues.
            </p>
            <p className="text-base font-medium text-[#FFFFFFCC] mb-5">
              <span className="text-lg font-semibold text-white">
              Intelligent Routing:
              </span>{" "}
              Leveraging machine learning algorithms, our AI intelligently routes calls to the most appropriate agent or department based on the nature of the inquiry, reducing wait times and improving customer satisfaction.
            </p>
            <p className="text-base font-medium text-[#FFFFFFCC] mb-5">
              <span className="text-lg font-semibold text-white">
              CRM Integration:
              </span>{" "}
              Seamless integration with customer relationship management (CRM) systems enables our AI Call Agent to access customer data, history, and preferences, personalizing interactions and fostering stronger relationships.
            </p>
            <p className="text-base font-medium text-[#FFFFFFCC] mb-5">
              <span className="text-lg font-semibold text-white">
              Analytics and Insights:
              </span>{" "}
              Built-in analytics provide valuable insights into customer behavior, preferences, and pain points, empowering businesses to make data-driven decisions and continuously optimize their customer service strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiCallCenter;
