# **Talk-Tuah-Hospital**

## Axxess Hackathon 2025

![Screenshot](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/286/088/datas/original.png)

[Devpost](https://devpost.com/software/axxess-hack-project)

## Inspiration

Access to healthcare is a fundamental right, yet millions of people face barriers to timely medical services—whether it’s long appointment wait times, the lack of nearby hospitals, internet access, language barriers, or overwhelming administrative hurdles. Long wait times, distant hospitals, and complex digital platforms create barriers for non-tech-savvy individuals, the elderly, and underserved communities. In the U.S. alone, patients can wait an average of 26 days just to see a doctor, and thousands lose their lives every year due to delayed or inaccessible medical care.

Inspired by the urgent need for efficient, inclusive, and accessible healthcare, we envisioned Talk-Tuah Hospital—a conversational AI voice agent that eliminates these challenges. By simply making a phone call, users can book appointments instantly, check doctor availability, find hospital beds, get directions and contact details for nearby hospitals, and even receive general medical guidance—all without needing a smartphone, internet access, or digital expertise.

## What it does

TalkTuah Hospital transforms the healthcare experience by providing a conversational AI assistant that patients can access with a simple phone call. It eliminates long wait times and administrative hurdles by allowing users to book appointments, check doctor availability, and access critical hospital information—all through natural voice commands. Key features include:

- **Voice-Activated Services:** Schedule doctor appointments, check hospital bed availability, and get essential medical information hands-free.

- **Multi-Language Support:** Communicate effortlessly in English and Spanish, ensuring accessibility for diverse patient populations.

- **Accessibility:** Works on any phone—no need for internet access or smartphone apps.

- **AI Assistance:** Get real-time responses to general medical queries and receive appointment reminders via email.

- **Real-Time Database Integration:** Seamlessly syncs with databases like Supabase to provide up-to-date doctor availability and hospital resources.

- **CRM Integration:** Connects with platforms like Cal.com via webhooks, allowing healthcare providers to manage patient bookings efficiently.

- **Maps & Navigation Support:** Instantly access directions to nearby hospitals, contact details, and other location-based healthcare services.

By combining AI-driven automation with real-time healthcare data, TalkTuah Hospital ensures that patients receive faster, easier, and more inclusive access to medical care—anytime, anywhere.

## How we built it

We developed Talk-Tuah Hospital by integrating cutting-edge technologies to create a seamless and accessible voice-driven healthcare assistant:

- **Conversational AI:** Utilized Retell AI for natural language understanding and generation, enabling smooth and intuitive voice interactions.

- **Custom Telephony System:** Built a custom telephony feature using Twilio Elastic SIP Trunk, allowing users to access healthcare services via phone calls without internet dependency.

- **Real-Time Database Integration:** Connected Supabase (a PostgreSQL database) with Retell AI using webhooks, ensuring instant updates on doctor availability, hospital bed status, and appointment scheduling.

- **User Dashboard:** Developed a robust admin dashboard with Next.js, Tailwind CSS, and ShadCN UI, enabling healthcare providers to manage appointments, patient interactions, and system monitoring.

- **Real-Time Map Integration:** Implemented React Leaflet for location-based hospital search and navigation, while using the OpenAI API to fetch and return hospital data dynamically on the frontend.

- **Web Widget Integration:** Designed an interactive widget for the website, allowing users to engage with our retell AI agent directly from their browser.

- **Fine-Tuned 2nd AI agent for Medical Assistance:** Fine-tuned a GPT-4 model using Kaggle’s FDA drug prescription datasets, powering the Talk-Tuah Doctah chat widget, which provides intelligent responses to medical inquiries.

## Challenges we ran into

- **Task-Oriented AI:** Designing a multi-step conversational flow where the AI could handle complex healthcare interactions, like booking appointments, checking hospital resources, and providing real-time updates, while maintaining smooth and natural dialogues.

- **Voice Integration:** Fine-tuning Retell AI and Twilio Elastic SIP Trunk to ensure the AI’s speech felt lifelike, responsive, and accessible for diverse users, including the elderly and non-tech-savvy individuals.

- **Real-Time Data Handling:** Ensuring instant updates on doctor availability, hospital bed status, and appointment schedules required optimizing webhook-based integration between Retell AI, Supabase, and CRM platforms like Cal.com.

- **Time Constraints:** Implementing multiple ambitious features—like multi-language support, interactive web widgets, and real-time mapping—within a limited timeframe while ensuring system reliability.

## Accomplishments that we're proud of

- **Functional Prototype:** Built an AI-powered assistant for booking appointments, checking doctor availability, and real-time hospital info—all via phone calls.

- **Multi-Language Support:** Supports English and Spanish for wider accessibility.

- **Real-Time Data & Maps:** Integrated Supabase for live updates and React Leaflet for real-time hospital mapping.

- **Admin Dashboard & Web Widget:** Developed a Next.js dashboard for hospitals and a chat widget powered by a fine-tuned GPT-4 medical model.

TalkTuah Hospital streamlines patient engagement, making healthcare faster and more accessible.

## What we learned

- **Voice AI Challenges:** Gained insights into fine-tuning conversational AI for natural and intuitive patient interactions.

- **Real-Time Data Handling:** Learned to integrate Supabase with webhooks for instant updates on hospital availability.

- **Seamless Tech Integration:** Developed expertise in connecting Twilio, React Leaflet, and OpenAI APIs for a unified experience.

- **User-Centric Design:** Emphasized accessibility for non-tech-savvy users by ensuring simple, voice-driven interactions in English and Spanish.

TalkTuah Hospital taught us how AI can bridge gaps in healthcare, making services faster and more inclusive.

## What's next for Talk-Tuah Hospital

We’re excited to expand TalkTuah Hospital with even more powerful features to enhance patient engagement and healthcare accessibility:

- **Medical Report Analysis:** AI-powered support to read and summarize medical reports, helping patients understand their diagnoses and prescriptions.

- **Expanded Language Support:** Adding more languages beyond English and Spanish to cater to diverse communities.

- **Mobile App Integration:** A dedicated phone app for appointment tracking, reminders, and chat-based medical assistance.

- **Insurance & Billing Assistance:** Automated voice support for insurance inquiries, billing breakdowns, and claim assistance.

- **Enhanced AI & Automation:** Smarter CRM integrations, real-time patient monitoring, and predictive analytics to improve hospital efficiency.

With these advancements, TalkTuah Hospital will continue revolutionizing healthcare accessibility—making it faster, smarter, and truly patient-centric. 🚀
