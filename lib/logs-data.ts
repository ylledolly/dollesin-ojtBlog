export type LogEntry = {
  id: string;
  title: string;
  date: string;
  description: string;
  narrative: string[];
  images: string[];
  character: {
    image: string;
    color: string;
    borderColor: string;
  };
};

export const logEntries: LogEntry[] = [
  {
    id: "01",
    title: "Week 01: A Strong Start at Quanby",
    date: "Feb 20-28",
    description: "Company orientation, team assignment for the Payroll Management System, and initial UI/UX design tasks for login and reusable components.",
    narrative: [
      "My first week as an intern at Quanby kicked off with an orientation led by the senior IT developers. It was an inspiring start, getting introduced to the company culture and meeting my fellow interns for the first time. We were quickly briefed on the upcoming projects and divided into three groups of four to five members. I was assigned to the Payroll Management System team under the mentorship of Sir Mark. I soon realized this wasn't just a simple payroll tool; it’s a complex system that includes an HRIS and job posting features. Being assigned as the Frontend Developer and UI/UX Designer felt like a dream come true, as it allows me to combine my love for creativity with technical logic to build something from the ground up.",
      "Once we received our user stories and the tech stack, I jumped straight into my first set of tasks: designing the login page, the footer, and a library of reusable components. Working in a real-world IT environment was a huge learning curve, and I went through several rounds of revisions to get the UI just right. After finalizing the design and structure, I successfully implemented the frontend for these initial sections. Wrapping up the week, I feel incredibly fulfilled. Taking a system from a concept to an actual interface is exactly what I’ve always wanted to do, and I'm excited to see how this project evolves."
    ],
    images: [
      "/documentations/w01/640118303_866932983008336_3098651822220370409_n.jpg",
      "/documentations/w01/IMG_20260223_094330_692.jpg",
      "/documentations/w01/IMG_20260227_104812_109.jpg"
    ],
    character: { image: "/logs/40.png", color: "bg-[#822e4d]", borderColor: "border-[#822e4d]" },
  },
  {
    id: "02",
    title: "Week 02: Account Security & Mentorship",
    date: "March 2-7",
    description: "Designing account activation flows, implementing idle timeout security, and receiving professional feedback during the Stand-up Saturday.",
    narrative: [
      "After completing the initial login interface, my focus this week shifted toward essential security and account management features. I was tasked with designing and developing the account activation components—specifically the flow where new users can set up their accounts for the first time via a secure link. Along with this, I implemented an idle timeout and lockscreen functionality. This feature is crucial for a payroll system, as it ensures that sensitive data remains protected by automatically locking the session if a user is away from their desk for too long.",
      "Since I’ve become more comfortable with our tech stack, I was able to handle these logic-heavy tasks efficiently. Because I managed my time well and finished the core requirements ahead of schedule, I dedicated the rest of the week to fine-tuning the frontend. I went through the existing pages to polish the styling and ensure that every interaction felt smooth and professional. I also used the extra time to do a deep dive into the user stories, double-checking that every corner of the system I’ve built so far aligns perfectly with the project requirements.",
      "To wrap up the week, we held a Stand-up Saturday session. This is where we present our assigned tasks to our mentors so they can review our progress. It’s a vital part of our workflow because it allows the mentors to check if we are strictly adhering to the system requirements. The feedback I received helped me further polish my work and ensured that the components I built were up to industry standards. It was a productive week that balanced independent development with professional guidance."
    ],
    images: [
      "/documentations/w02/IMG_20260302_145445_834.jpg",
      "/documentations/w02/IMG_20260303_092651_913.jpg",
      "/documentations/w02/IMG_20260303_161716_149.jpg",
      "/documentations/w02/IMG_20260304_164720_431.jpg",
      "/documentations/w02/IMG_20260305_132211_236.jpg",
      "/documentations/w02/IMG_20260306_144203_094.jpg"
    ],
    character: { image: "/logs/41.png", color: "bg-[#e6baa0]", borderColor: "border-[#e6baa0]" },
  },
  {
    id: "03",
    title: "Week 3: Settings the Standard",
    date: "March 9-14",
    description: "Formally transitioning to frontend development roles, dividing core modules with Archie, and implementing high-stakes security features.",
    narrative: [
      "This week marked a transition into the internal core of our system. With the overall design language and UI foundation now firmly established, our team made a strategic decision regarding our workflow: Archie and I were officially designated as the Frontend Developers. To maximize our efficiency, we decided to divide the various modules between the two of us. We started with the Settings module, which is a massive part of the system containing several subcomponents. We split these sections up, and I was specifically assigned to handle the General and Security Settings across all user roles.",
      "Focusing on my assigned areas, I developed the Profile and Notification sections under General Settings, along with the high-stakes Security features. This included Two-Factor Authentication (2FA), Login Session management, and the Forgot Password functionality. I also implemented the Idle Timeout Configuration for the Admin side, which is crucial for protecting sensitive data. Having clear user stories made the design and development process much more straightforward, as the requirements for each role were well-defined. I also made it a priority to keep the frontend file structure clean and organized, ensuring that Archie and I can easily navigate each other's work as we move forward. We ended the week with another Stand-up Saturday, where presenting our progress confirmed that our new divided workflow is helping us build a more cohesive and professional system."
    ],
    images: [
      "/documentations/w03/640904545_1678964286598870_6359587188249051853_n.jpg",
      "/documentations/w03/658901858_1342010061285126_87074608664503226_n.jpg",
      "/documentations/w03/IMG_20260309_165041_289.jpg",
      "/documentations/w03/IMG_20260311_143610_364.jpg",
    ],
    character: { image: "/logs/42.png", color: "bg-[#dd5340]", borderColor: "border-[#dd5340]" },
  },
  {
    id: "04",
    title: "Week 4: The Core Transition",
    date: "March 16-21",
    description: "Shifting focus from core system settings to the development of dynamic employee modules, specifically Leave Management and Overtime Requests.",
    narrative: [
      "After finishing the General Settings, I moved on to designing and developing the Leave Management and Overtime Request modules for the Employee side. To ensure a smooth development process, I spent a good amount of time studying the user stories first. This was really eye-opening, as it helped me understand the actual logic behind how leave and overtime requests are handled in a professional work environment—from how credits are tracked to how requests are queued for approval. Getting a grasp on these business rules before I started coding made it much easier to build a functional and user-friendly interface.",
      "By the end of the week, I presented my work during our Stand-up Saturday session. My mentor provided some valuable feedback, suggesting a few refinements and modifications to make the forms even more intuitive. I made sure to take detailed notes on these suggestions so I could immediately start polishing the modules. It was a great week for me, and I’m starting to feel more confident in handling features that involve complex user workflows."
    ],
    images: [
      "/documentations/w04/IMG_20260317_140511_263.jpg",
      "/documentations/w04/IMG_20260318_110451_001.jpg",
      "/documentations/w04/IMG_20260321_134304_808.jpg"
    ],
    character: { image: "/logs/43.png", color: "bg-[#eec047]", borderColor: "border-[#eec047]" },
  },
  {
    id: "05",
    title: "Week 5: Payslips & Iteration",
    date: "March 24-28",
    description: "Fine-tuning the Overtime Management interface and developing the Monthly Payslip Consolidation module for viewing and downloading records.",
    narrative: [
      "This week was dedicated to fine-tuning the features I had previously developed while taking on new responsibilities. I focused on implementing the minor adjustments and refinements suggested by my mentor during our last session, particularly regarding the Overtime Management interface on the employee side. These small but important tweaks ensured that the user experience was as smooth as possible before I presented the updated version in our next stand-up. It was a great lesson in the importance of iteration—sometimes the smallest UI changes make the biggest difference in how a system feels to the end user.",
      "In addition to these refinements, I began working on a major new feature: Monthly Payslip Consolidation. This module is essential for the employee side of the system, as it allows users to both view and download their individual payslips. My goal was to create a clean, secure interface where employees can easily access a complete record of their monthly compensation. Balancing these data-heavy requirements with an intuitive design has been a rewarding challenge, and it’s satisfying to see the platform provide such critical functionality for the workforce."
    ],
    images: [
      "/documentations/w05/641727270_26113300008327072_4720785406949591524_n.jpg",
      "/documentations/w05/643878269_2078842376019032_6897688158534560259_n.jpg",
      "/documentations/w05/649868688_822482174207217_2534163704203262172_n.jpg",
      "/documentations/w05/IMG_20260324_151155_804.jpg",
      "/documentations/w05/IMG_20260325_142608_802.jpg"
    ],
    character: { image: "/logs/40.png", color: "bg-[#5B8DB8]", borderColor: "border-[#5B8DB8]" },
  },
  {
    id: "06",
    title: "Week 6: Productivity Amidst the Holiday Break",
    date: "March 30 - April 4",
    description: "Clearing out backlogs and finalizing the Monthly Payslip module during the Holy Week schedule.",
    narrative: [
      "Since this week coincided with Holy Week, our schedule was a bit different, consisting of only a few days on-site followed by a work-from-home setup. To account for the shorter week, our mentor and project lead decided to hold off on assigning any heavy new modules. Instead, we focused on clearing out our backlogs and ensuring that all previous tasks fully integrated the recommendations and suggestions from our last stand-up session. This gave us a much-needed window to breathe and ensure the quality of our existing code before moving into the next big phase of development.",
      "On my end, I focused on finishing my remaining frontend tasks, specifically putting the final touches on the Monthly Payslip module. I polished the layout and ensured the download functionality was working seamlessly across different screen sizes. While the workload was lighter than usual, it was satisfying to close out those minor tickets and enter the holiday break with a clean slate. It was a productive yet balanced week that allowed us to reflect on our progress so far. Happy Holy Week!"
    ],
    images: [
      "/documentations/w06/IMG_20260330_133505_919.jpg",
      "/documentations/w06/IMG_20260401_100410_600.jpg"
    ],
    character: { image: "/logs/41.png", color: "bg-[#D4A574]", borderColor: "border-[#D4A574]" },
  },
  {
    id: "07",
    title: "Week 7: Dashboard & Attendance",
    date: "April 6-11",
    description: "Developing the central Employee Dashboard hub and a comprehensive Attendance Module with calendar and table views.",
    narrative: [
      "With the holiday break over, we jumped straight back into our regular schedule and tackled the heavy tasks we had paused. At this stage, the system's frontend is approximately 80% complete, representing a massive collaborative effort between Archie and me. This week, my primary focus was the design and development of the Employee Dashboard and the Attendance Module. The dashboard serves as the central hub for the user, featuring interactive widgets for attendance tracking, a summary of leave balances, and a section for company announcements. I also integrated \"Quick Action\" buttons for filing leave or overtime and a dedicated payslip widget, ensuring that the most important tasks are just one click away.",
      "In addition to the dashboard, I built out the Attendance Page, which provides a comprehensive view of an employee’s work history. I implemented both a structured table view and a dynamic calendar view to give users flexibility in how they track their time. This module allows employees to see the full details of their attendance records—clearly marking statuses like present, absent, late, on leave, or holidays. Bringing these data-heavy components to life has been a highlight of the week, as it really showcases how the system will simplify day-to-day tasks for everyone in the company."
    ],
    images: [
      "/documentations/w07/IMG_20260406_160230_838.jpg",
      "/documentations/w07/IMG_20260407_145308_154.jpg",
      "/documentations/w07/IMG_20260408_141118_778.jpg"
    ],
    character: { image: "/logs/42.png", color: "bg-[#E07A5F]", borderColor: "border-[#E07A5F]" },
  },
  {
    id: "08",
    title: "Week 8: Full Remote & Backend Integration",
    date: "April 13-18",
    description: "Transitioning to WFH due to health concerns, and assisting with backend integration using Supabase and Drizzle ORM.",
    narrative: [
      "This week brought a major shift in our working environment as our office transitioned to a full work-from-home setup. This was due to a sudden outbreak of chicken pox at the workplace, which affected nearly everyone on the team. Fortunately, I managed to stay healthy, but the situation certainly made for one of the most memorable and high-stakes highlights of my internship so far. Despite the change in scenery and the health concerns surrounding the team, our momentum didn't slow down. With the frontend now sitting at a solid 90% completion thanks to the close collaboration between Archie and me, our project lead decided it was time for me to step up and assist with backend integration. This move allowed Archie to focus on finalizing the remaining UI across all roles, while I helped speed up the technical connection between our data and the interface.",
      "My primary focus was taking full ownership of the Job Portal module on the HR side. This is a critical feature where HR staff can post open positions for public application, and I was responsible for ensuring the frontend and backend worked together seamlessly. While I have a background in backend development using XAMPP, our current tech stack uses Supabase and Drizzle ORM, which was entirely new to me. It was definitely a steep learning curve, but by leveraging available resources and staying persistent, I was able to bridge the gap. I’m especially grateful to my teammate, Dave, who was incredibly patient and helpful whenever I had technical questions. It was an exhausting week, but incredibly fulfilling to gain hands-on experience with modern backend tools while helping the team push toward the finish line."
    ],
    images: [
      "/documentations/w08/668493036_1273368048327280_5838835936226926023_n.jpg",
      "/documentations/w08/IMG_20260417_172533_925.jpg",
      "/documentations/w08/IMG_20260417_172620_670.jpg",
      "/documentations/w08/careers_page.png"
    ],
    character: { image: "/logs/43.png", color: "bg-[#5B8DB8]", borderColor: "border-[#5B8DB8]" },
  },
  {
    id: "09",
    title: "Week 9: Lessons in Meticulousness",
    date: "April 20-25",
    description: "Backend integration for leave and overtime, taking ownership of the Department Module, and recovering from a major database mishap.",
    narrative: [
      "We are officially in the home stretch, with the system nearly 100% complete. This week, the focus remained on the most complex part of the project: the Payroll Computation logic. Dave and Kuya Mark have been working closely together, diving deep into the real-world intricacies of payroll math to ensure the system handles tax, deductions, and net pay with absolute integrity. On my end, since my primary modules were already stable, I took on the Department Module for the HR side and handled the backend integration for the Leave and Overtime Request features I built earlier. Having designed the frontend myself, connecting the logic to the backend felt intuitive, and it was satisfying to see the data finally flowing correctly from the user input to the database.",
      "However, the week wasn't without its drama. While managing several tasks at once, I made a major technical error and accidentally deleted all the tables in our database. It was a moment of total frustration and panic, especially knowing how close we are to finishing the entire project. I felt like I had jeopardized months of work in a single click. Fortunately, our project lead and Dave were able to step in and retrieve the data, saving the day. This experience was a massive wake-up call and a valuable lesson in professional development: in a live environment, caution is just as important as speed. I’m moving forward with a much deeper respect for database management and a renewed focus on being meticulous with every command I execute."
    ],
    images: [
      "/documentations/w09/Screenshot 2026-04-20 092954.png",
      "/documentations/w09/Screenshot 2026-04-20 133617.png",
      "/documentations/w09/Screenshot 2026-04-20 134904.png",
      "/documentations/w09/Screenshot 2026-04-20 140657.png"
    ],
    character: { image: "/logs/40.png", color: "bg-[#4c5c68]", borderColor: "border-[#4c5c68]" },
  },
  {
    id: "10",
    title: "Week 10: Business Logic & Optimization",
    date: "April 27 - May 1",
    description: "Implementing complex work schedule overrides, financial multipliers, and a custom debouncing utility for system-wide optimization.",
    narrative: [
      "This week, I focused on my final major assignment: integrating the Work Schedule Configuration within the Admin settings. This was a highly technical task, as I was responsible for building the logic that serves as the \"brain\" for the entire attendance and payroll engine. Beyond the basic setup, I implemented a complex hierarchy of rules including Department-Level and Employee-Level Overrides. This ensures the system is flexible enough to handle specific shift requirements, like a night shift from 10 PM to 6 AM, while maintaining the standard system defaults for the rest of the workforce.",
      "To add more precision to the system’s financial accuracy, I integrated advanced toggles for Deduct Undertime and Deduct Late, along with a configurable Grace Period. I also built the inputs for Holiday, Night Shift, and Overtime Multipliers, which are critical for the backend to calculate gross pay correctly. On the technical side, I expanded my knowledge by learning and implementing Debouncing. I created a system-wide debounce utility that we now use for all search functionalities across the platform. This not only improved the system's performance by reducing unnecessary API calls but also provided a much smoother and more professional user experience. Seeing these complex business rules and technical optimizations come together was the perfect way to wrap up my core development tasks."
    ],
    images: [
      "/documentations/w10/received_1638732567415564.jpeg",
      "/documentations/w10/received_4244206685844704.jpeg",
      "/documentations/w10/IMG_20260429_125756_499.jpg"
    ],
    character: { image: "/logs/41.png", color: "bg-[#7e5a7b]", borderColor: "border-[#7e5a7b]" },
  },
  {
    id: "11",
    title: "Week 11: On-Site Connections and the Final QA Push ",
    date: "May 4-8",
    description: "On-site collaboration at Cabangan office, final backend alignment, and rigorous quality assurance and bug fixing.",
    narrative: [
      "We kicked off the week on May 4 with an on-site shift at the office in Cabangan. It was a refreshing change of pace to be in a different environment and interact directly with the regular employees there. We hit it off with a few of them, and it was great to make some new friends in a professional setting. Beyond just small talk, some of the seniors gave us really solid advice about our future career paths and shared their own experiences in the industry. It was a nice way to start the week, feeling more connected to the team and getting some perspective on where we’re headed.",
      "After that first day on-site, we spent the rest of the week working from home to focus on our final milestones. I officially finished my last backend task for the Admin side, and we held a presentation to show that all our modules finally aligned with the user stories. Once the presentation was over, we jumped straight into Quality Assurance. Since we were back in our remote setup, we spent about five hours a day on Discord together, going through every role and module to find any hidden issues.",
      "During those long Discord sessions, I took charge of listing down every bug and fix that we discovered. We really wanted to make sure the system was polished and worked perfectly for the end users. Between the debugging and the feedback sessions, I also started writing the user manual. It’s been a busy week of balancing social connections at the office with the heads-down focus of remote testing, but seeing the system finally come together makes the hard work feel worth it."
    ],
    images: [
      "/documentations/w11/IMG_20260504_111551_609.jpg",
      "/documentations/w11/IMG_20260508_195611_774.jpg",
      "/documentations/w11/Screenshot 2026-05-08 212354.png",
      "/documentations/w11/2acba151-d604-4031-9c9e-a7831ea7fb4e.jpg",
      "/documentations/w11/5ffd5031-8c5d-4489-82e0-e8d127881988.jpg"
    ],
    character: { image: "/logs/42.png", color: "bg-[#52796f]", borderColor: "border-[#52796f]" },
  },
  {
    id: "12",
    title: "Week 12: Deployment & Final Goodbyes",
    date: "May 11-15",
    description: "Deploying the final system to production, completing user documentation, and concluding the 486-hour internship journey.",
    narrative: [
      "This was officially the final week of my internship, and it felt like the culmination of everything we’ve worked for. By this point, the system was fully functional and optimized across every user role. We kicked things off on Monday with an intensive, full-scale testing session following our initial QA. Once the final green light was given, Dave and our mentor, Sir Mark, officially deployed the system. Watching the platform go live was an indescribable feeling—a mix of relief, pride, and a professional milestone I’ll never forget. With the code finally in production, I spent Tuesday through Thursday working from home on my last major task: creating the comprehensive user manual documentation for all roles, ensuring that every user has a clear guide on how to navigate the system we built.",
      "Friday marked our very last day onsite, where we officially received our Certificates of Completion for 486 hours. It was a day filled with overwhelming joy and a deep sense of accomplishment; looking back at the beginning of this journey, we genuinely doubted if we could pull off such a complex project, but seeing it deployed proved what we were capable of. At the same time, a wave of sadness hit me. I realized I was going to miss my daily routine with Archie and Dave—the morning \"chikahan\" and teasing, and the constant excitement over our provided office meals. I’ll miss our random ratings of the free breakfast, lunch, and snacks we shared, and the playful \"baratan\" while we worked. The bond we formed over the past few months turned a high-pressure environment into a second home.",
      "This is my final entry for my OJT blog, and looking back, it has been an absolutely amazing journey. I am so incredibly happy with my decision to join Quanby Solutions, even though I took the leap and applied all on my own. I don't regret a single moment; I’ve gained lifelong friends, expanded my technical knowledge, and sharpened my professional skills in ways I never imagined. Being able to apply everything I learned during my four years at BU to a real-world IT setting was the perfect way to close this chapter. I’m walking away from this internship not just as a graduate-to-be, but as a more confident developer ready for the next big challenge."
    ],
    images: [
      "/documentations/w12/IMG_20260512_194135_003.jpg",
      "/documentations/w12/Screenshot 2026-05-14 163405.png",
      "/documentations/w12/Screenshot 2026-05-14 163548.png",
      "/documentations/w12/Screenshot 2026-05-14 163621.png"
    ],
    character: { image: "/logs/43.png", color: "bg-[#2A9D8F]", borderColor: "border-[#2A9D8F]" },
  },
];

export function getLogEntry(id: string) {
  return logEntries.find((e) => e.id === id);
}
