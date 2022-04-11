// Здесь заносятся данные? которые будут отображаться в блоке Answer & Question
//question - текст вопроса
//answer - текст ответа

const qa = [
    {
        question: "Are there any check-in restrictions when exiting Thailand?",
        answer: "Unless stated otherwise by your airline, the only requirement to exit Thailand is to present your vaccination certificate or an ATK test result before boarding the flight. It is recommended to check with your airline to know the current entry requirements of your country of destination."
    },
    {
        question: "Unless stated otherwise by your airline, the only requirement to exit Thailand is to present your vaccination certificate or an ATK test result before boarding the flight. It is recommended to check with your airline to know the current entry requirements of your country of destination.",
        answer: "If your return flight from Cambodia is a direct transit (you do not pass through Passport Control), then you do not need to apply for a new Thailand Pass. You only need insurance and the pre-boarding COVID test.\n" +
            "\n" +
            "If you must exit through Passport Control to board your new flight, you will need to apply for a new Thailand Pass and do a new Test & Go.\n" +
            "\n"
    },
    {
        question: "I am trying to use the MorChana App in my home country, but it is not working. What is the issue?\n",
        answer: "The MorChana application will only activate once you are in Thailand. You can download it before then, but it will not register any details or your Thai Pass QR code. You may ask your SHA+ hotel staff to assist you on how to navigate the app.\n" +
            "\n"
    },
    {
        question: "Can I land directly in Phuket, stay for 3 – 4 days, and then leave again?\n",
        answer: "Yes. If you land directly at Phuket International Airport under Test & Go you will do 1-night mandatory quarantine and then are free to travel for the rest of your stay. Since you are staying less than 5 days, you are not required to undergo an ATK test. However, you need to check the entry requirements of your next country of destination.\n" +
            "\n"
    },
    {
        question: "Do I need to print all my documents and Thailand Pass QR code for when I arrive in Thailand?\n",
        answer: "Yes. It is the best practice as you will present these documents to Immigration and Health Officers at the airport Passport and Health Control.\n" +
            "\n"
    },
    {
        question: "Why are the SHA+/AQ hotel packages more expensive than a normal hotel?\n",
        answer: "SHA+/AQ hotels include the cost of transport from the airport, RT-PCR testing, and transport to the hospital/isolation facility for cases where people test positive for Covid.\n" +
            "\n"
    },
    {
        question: "What documents do I need for a Thai Pass Test and Go application?\n",
        answer: "1. Passport Copy – Scanned copy of passport profile page.\n" +
            "2. Insurance Policy – Minimum cover of $20,000 USD. The insurance policy must be valid for the entire length of stay in Thailand.\n" +
            "3. Vaccination certificate – Your vaccination certificate must be of an approved vaccine variety and you must have been vaccinated over 14 days prior to departure.\n" +
            "(Not required for children below 18 years old who are escorted by parents).\n" +
            "\n" +
            "4. Hotel reservation – SHA Extra+ / AQ for 1 day (Day 1) (1 RT-PCR test fee 1 ATK self-test kit and airport transfer included).\n" +
            "5. Flight detailsPassport Copy – Scanned copy of passport profile page.\n" +
            "6. Hotel reservation – SHA Extra+ / AQ for 1 day (Day 1) (1 RT-PCR test fee 1 ATK self-test kit and airport transfer included).\n"
    },
    {
        question: "If you land at Bangkok Suvarnabhumi from an international flight, can you transfer to a domestic flight without leaving the airport and do your test and go to your final destination? Or do you have to do one at Bangkok accredited Hotel first?\n",
        answer: "Unless the flight is listed as a ‘sealed flight’, you cannot transit domestically. You must complete your Test & Go in Bangkok before traveling to your final destination. Please check with Thai Airways and Bangkok Airways for the new list of sealed flights to Phuket and Samui.\n" +
            "\n"
    },
    {
        question: "What does the term transit mean regarding Thailand Pass?\n",
        answer: "To transit in Thailand without needing a Thailand Pass, you must not pass through Passport Control but move directly from one flight to the next.\n" +
            "\n" +
            "If you pass through Passport Control for ANY reason (to collect bags or check in on a new flight), you are required to have a Thailand Pass and follow Test & Go/ Alternate Quarantine procedures."
    },
    {
        question: "With Test & Go, you may travel around everywhere in Thailand after a negative test result. But with SANDBOX you have to stay in your hotel for 5 days. Why is that?\n",
        answer: "The Sandbox scheme was implemented before Test & Go was available in Phuket. If you are vaccinated and meet the requirements for Test & Go, there is no need to enter Thailand under the Sandbox scheme. The Test and Go program is a better option for those who are fully vaccinated.\n" +
            "\n"
    },
    {
        question: "For the vaccination certification – can we use a screenshot of the official Corona App from Germany which shows all the vaccinations or do we need an official printout of the vaccination certificates?\n",
        answer: "It is best practice to print a hard copy of all documents needed when applying for a Thailand Pass. You will present these documents to Passport Control on arrival. You can take a screenshot if all applicable details show, but it is better to present the screen or print the official certificate. \n" +
            "\n" +
            "For the Thailand Pass application, yes a high-resolution screenshot will be accepted."
    },
    {
        question: "Can a tourist apply for Thailand Pass with only a fly-in ticket (1 way) without a fly-out ticket booked?\n",
        answer: "Yes. With Thailand Pass, you only need to provide details of your entry flight."
    },
    {
        question: "How do I extend my stay in Thailand if I have a Tourist Visa or visa exemption?\n",
        answer: "If you enter Thailand under visa exemption you can stay for 30 days.\n" +
            "\n" +
            "A Tourist Visa allows you to stay in Thailand for 60 days.\n" +
            "\n" +
            "Before the expiry date of your permit to stay, you can visit the local Thai Immigration Office and apply for a 30-day extension. The cost is 1900 Thai baht."
    },
    {
        question: "I have a family of 4. One child is under 6. Do I need to submit a separate Thai Pass application for each family member?",
        answer: "No. All travelers aged 18 years old or above must apply for Thailand Pass individually.\n" +
            "\n" +
            "Children under the age of 18 do not need to register for the Thailand Pass on their own. Parents will add their children’s information to their Thailand Pass registration under the “Personal Information” section."
    },
    {
        question: "What do you do if you test positive at the hotel? Do you stay at the hotel to quarantine or do they move you and how long of a quarantine?",
        answer: "If you test positive with no history of COVID 19 infection, you will be sent to a hotel or hospital quarantine for up to 10 days. \n" +
            "\n" +
            "If you test positive with a history of COVID infection, you will be sent to isolation in a hotel or hospital. Officials will review your infection history (medical certificate of recovery) It will depend on the case. The assessment will include your CT level, whether you are asymptomatic and how long ago you had COVID."
    },
    {
        question: "What are the rules for traveling to Thailand from the UK if unvaccinated?",
        answer: "IF you are not vaccinated, you must enter Thailand under the Alternative Quarantine scheme. You are required to quarantine in your room at an approved SHA+ hotel and cannot leave the room for 5 nights. You will do an RT-PCR test on Day 1 and Day 5."
    },
    {
        question: "I’m traveling on the 6th of April from Australia. I just got a message from Qantas saying I require a PCR within 72 hours. Is RT-PCR still required?\n",
        answer: "Because the April 1 changes have not come into effect yet, many airlines are still auto-generating correspondence. Check your airline after April 1."
    },
    {
        question: "My Thai Pass has been approved. What do I do now?",
        answer: "Once your Thailand Pass is approved, you will receive an email with your Thailand Pass QR code, ID number, and further details.\n" +
            "\n" +
            "Compile your travel documents to be presented on arrival. It is recommended that you print 2 copies of all documents in case a document is kept by an airport officer.\n" +
            "\n" +
            "Print a copy of your QR code for arrival in case there is an issue with your phone when arriving."
    },
   ]


// Здесь заносятся данные? которые будут отображаться в блоке What you need for Thailand Pass
//img - ссылка на изображение
//title - текст заголовка карточки
//text - текст, который будет отображаться в карточке
//description - текст, который будет отображаться во всплывающем окне при нажатии на кнопку READ MORE

const thaipassDate = [
    {
        img: "image/thaipass/passport.jpeg",
        title: "Passport",
        text: "A scan or a high-quality photo of only the first page of the passport with a photo.",
        description: "Make sure that the passport image (scan or photo) is clear, without glare and distortion. Poor image quality may cause failure. We check the entire package of documents before submitting and eliminate all the reasons on the basis of which a refusal may be given. Write to us and we will check your package of documents."
    },
    {
        img: "image/thaipass/certificate.jpeg",
        title: "Vaccination Certificate",
        text: "Electronic certificate of vaccination or a high-quality scan / photo. Fully vaccinated against COVID-19 no less than 14 days before travelling",
        description: "The certificate must be in English and contain information about the name of the vaccinated person, the name of the vaccine, the date of the first and second vaccination, as well as passport data. We issue a Tie Pass with various certificates. Write to us and get answers to all questions about vaccination."
    },
    {
        img: "image/thaipass/qrcode.jpeg",
        title: "Vaccination QR code",
        text: "QR code from the vaccination certificate. No QR code? Not a problem. We issue a Tie Pass even without QR",
        description: "The QR code from your vaccination certificate should be entered into the Tie Pass system. The code must be clearly distinguishable. The code file must not contain text or images. Use a photo editor or other software to create a file with the code."
    },
    {
        img: "image/thaipass/booking.png",
        title: "Hotel booking",
        text: "SHA Extra+ standard hotel for the first day of your stay in Thailand",
        description: "According to the requirements of the Test & Go program, you must have a confirmation from the hotel about the paid room for the first and fifth days of your stay in Thailand (these may be different hotels in different provinces of Thailand). The hotel must meet the SHA Estra + standard. The hotel booking service that complies with the rules of the Test & Go program is included in the price of the Tie Pass."
    },
    {
        img: "image/thaipass/airticket.jpeg",
        title: "Air ticket",
        text: "A direct flight to the provincial airport of the Test & Go program is required.",
        description: "According to the requirements of the Test & Go program, you can arrive in Thailand only through the airports included in the program. If you are planning a vacation in a province far from the designated airports, make sure that the hotel where you stay immediately after arrival provides a SHA standard transfer from the airport. We will help you book a transfer."
    },
    {
        img: "image/thaipass/pay_pcr.jpeg",
        title: "Reservation of PCR test",
        text: "Before making a Tie Pass, you should pay and book a PCR test.",
        description: "To register Topas, you should book and pay for PCR tests, which are carried out on the first and fifth days of your stay in Thailand. If you are entering Phuket, you should pay for the tests on the website www.thailandpsas.com\n" +
            "If you start a trip in Thailand in other provinces - PCR tests are paid through the hotel. The PCR test booking service is included in the price of a Tie Pass. Contact us and we will help you book and pay for PCR tests."
    },
    {
        img: "image/thaipass/insurance.jpeg",
        title: "Insurance from Covid-19",
        text: "Insurance with minimum coverage of 20,000 USD (not required for Thai nationals / foreign residents in Thailand can use social security or certificate from their employer).",
        description: "Medical insurance must meet the following requirements: (Coverage of medical expenses related to coronavirus infection; The minimum amount of medical expenses coverage is 50,000 US dollars; \n" +
            "The insurance policy must be in English; The policy must contain information about covering the costs associated with coronavirus infection; The insurance must cover the dates of the entire stay in Thailand"
    },
]

// Здесь заносятся данные? которые будут отображаться в блоке What you need for Test & Go
//img - ссылка на изображение
//title - текст заголовка карточки
//text - текст, который будет отображаться в карточке
//description - текст, который будет отображаться во всплывающем окне при нажатии на кнопку READ MORE

const testGoDate = [
    {
        img: "image/testgo/thailand_pass.jpeg",
        title: "Thailand Pass",
        text: "Thai Pass is a document confirming the right to enter Thailand under the Test & Go program",
        description: "Thai Pass is a document confirming the right to enter Thailand under the Test & Go program"
    },
    {
        img: "image/testgo/pcr_test.jpeg",
        title: "PCR test",
        text: "A PCR test with a negative result, issued no     more than 72 hours ago at the time of departure to Thailand",
        description: "When tourists first arrive at the airport or their hotel or designated venue, they have to undergo the first RT-PCR test and wait for the result in their hotel room. Children and adults must be tested for COVID-19 upon arrival. &para;If the test is negative, you will be able to travel all over Thailand. You will also be able to take the second test on the fifth day of your trip. The second test will be an antigen rapid test. &para;However, if you test positive for COVID-19, officials will refer you for the necessary medical treatment. The tourists will be responsible for the medical expenses. In some cases, insurance policies might not pay for your isolation expenses."
    },
    {
        img: "image/testgo/vaccine.jpeg",
        title: "Vaccination with an approved vaccine",
        text: "Travelers must be vaccinated against coronavirus at least 14 days before arrival in Thailand",
        description: "Travelers must be vaccinated against coronavirus at least 14 days before arrival in Thailand"
    },
    {
        img: "image/testgo/insurance.jpeg",
        title: "Medical insurance",
        text: "Medical insurance in the amount of at least 20,000 USD must cover the costs associated with COVID-19 coronavirus infection",
        description: "Medical insurance in the amount of at least 20,000 USD must cover the costs associated with COVID-19 coronavirus infection"
    },
    {
        img: "image/testgo/sha.jpeg",
        title: "First day at the SPA Extra+ Hotel",
        text: "The Test program & Go requires waiting for the results of the PCR test on the day of arrival at the SHA Extra standard hotel+",
        description: "The Test program & Go requires waiting for the results of the PCR test on the day of arrival at the SHA Extra standard hotel+"
    },
    {
        img: "image/testgo/pay_pcr.jpeg",
        title: "Payment for PCR test",
        text: "During the Test program & Go tourists take a PCR test. The test must be paid in full before arrival in Thailand",
        description: "During the Test program & Go tourists take a PCR test. The test must be paid in full before arrival in Thailand"
    },
]

const testGoingDate = [
    {
        img: "image/going/arrival.jpeg",
        title: "1. Arrival in Thailand",
        text: "You arrive in Thailand with printed documents and Thai Pass",
        description: ""
    },
    {
        img: "image/going/thaipass.jpeg",
        title: "2. Checking Your Thai Pass",
        text: "At border control, along with your passport, your They Pass will be checked and checked against the records in the database",
        description: ""
    },
    {
        img: "image/going/result-pcr.jpeg",
        title: "3. Checking your PCR test",
        text: "Together with the Thai Pass check, your PCR test made less than 72 hours before departure will be checked.",
        description: ""
    },
    {
        img: "image/going/pcr-test.jpeg",
        title: "4. PCR test in Thailand",
        text: "The medical control staff will conduct a PCR test, paid for during the registration of the Thai Pass",
        description: "When tourists first arrive at the airport or their hotel or designated venue, they have to undergo the first RT-PCR test and wait for the result in their hotel room. Children and adults must be tested for COVID-19 upon arrival. If the test is negative, you will be able to travel all over Thailand. You will also be able to take the second test on the fifth day of your trip. The second test will be an antigen rapid test.However, if you test positive for COVID-19, officials will refer you for the necessary medical treatment. The tourists will be responsible for the medical expenses. In some cases, insurance policies might not pay for your isolation expenses. "
    },
    {
        img: "image/going/transfer.jpeg",
        title: "5. Transfer to the SHA Extra standard hotel +",
        text: "Only SHA+ standard transfers are used for transfer to the hotel. The transfer is booked through the hotel and paid before arrival in Thailand",
        description: ""
    },
    {
        img: "image/going/hotel.jpeg",
        title: "6. Registration at the hotel",
        text: "During check-in at the hotel, you will be asked to install the Thai Molchana app on your phone as part of the Test & Go program. This is a prerequisite",
        description: ""
    },
    {
        img: "image/going/waiting.png",
        title: "7. Waiting for the results of the first test",
        text: "You stay in a hotel and do not leave your room until you receive a negative result of the PCR test. Usually the results are ready in 6-12 hours",
        description: ""
    },
    {
        img: "image/going/travel.jpeg",
        title: "8. Second - fourth days Test & Go",
        text: ""
    },
    {
        img: "image/going/rapid.jpeg",
        title: "9. Rapid coronavirus test",
        text: "On the fifth day of rest in Thailand, an independent rapid test for coronavirus is conducted. The test is conducted at the hotel. The results are ready in 10-30 minutes.",
        description: "On the fifth day of your trip, tourists will need to go through the second COVID test which is an ATK test. Just like the first test, if you test negative for COVID-19, you will be allowed to travel anywhere in the country. If you test positive, you need to do a confirmatory RT PCR test to make sure you have been infected with COVID and receive the necessary medical treatment."
    },
    {
        img: "image/going/end.jpeg",
        title: "10. Completion of the Test & Go program",
        text: "After receiving a negative result of the express test, you can again relax and travel throughout Thailand without restrictions",
        description: ""
    },
]

const newsDate = [
    {
        img: "image/news/image1.jpg",
        title: "Title_1",
        text: "1 Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения направлений прогрессивного развития. Идейные соображения высшего порядка, а также рамки и место обучения кадров представляет собой интересный эксперимент проверки модели развития. Таким образом реализация намеченных плановых заданий способствует подготовки и реализации систем массового участия."
    },
    {
        img: "image/news/image2.jpg",
        title: "Title_2",
        text: "2 С другой стороны реализация намеченных плановых заданий требуют определения и уточнения форм развития. Равным образом консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий. Задача организации, в особенности же укрепление и развитие структуры требуют"
    },
    {
        img: "image/news/image3.jpg",
        title: "Title_3",
        text: "3 Задача организации, в особенности же новая модель организационной деятельности позволяет выполнять важные задания по разработке дальнейших направлений развития. Равным образом дальнейшее развитие различных форм деятельности играет важную роль в формировании модели развития. Равным образом постоянное информационно",
    },
    {
        img: "image/news/image4.jpg",
        title: "Title_4",
        text: "4 Товарищи! постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании модели развития. Задача организации, в особенности же новая модель организационной деятельности требуют от нас анализа дальнейших направлений развития.",
    },
    {
        img: "image/news/image5.jpg",
        title: "Title_5",
        text: "5 С другой стороны начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки модели развития. Товарищи! постоянный количественный рост и сфера нашей активности позволяет оценить значение соответствующий условий активизации. Задача организации, в особенности же укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании направлений",
    },
    {
        img: "image/news/image6.jpg",
        title: "Title_6",
        text: "6 Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа форм развития. Задача организации, в особенности же начало повседневной работы по формированию позиции требуют определения",
    },
    {
        img: "image/news/image7.jpg",
        title: "Title_7",
        text: "7 Повседневная практика показывает, что дальнейшее развитие различных форм деятельности играет важную роль в формировании направлений прогрессивного развития. Не следует, однако забывать, что новая модель организационной деятельности способствует подготовки и реализации соответствующий условий активизации. Таким образом сложившаяся структура организации в значительной степени обуславливает создание систем массового участия.",
    },
    {
        img: "image/news/image8.jpg",
        title: "Title_8",
        text: "8 Задача организации, в особенности же новая модель организационной деятельности представляет собой интересный эксперимент проверки модели развития. Разнообразный и богатый опыт консультация с широким активом требуют определения и уточнения направлений прогрессивного развития. Равным образом постоянное информационно",
    },

]

const sliderDate = [
    {
        img: "image/slider/image1.jpg",
    },
    {
        img: "image/slider/image2.jpg",
    },
    {
        img: "image/slider/image3.jpg",
    },
    {
        img: "image/slider/image4.jpg",
   },
    {
        img: "image/slider/image5.jpg",
    },
    {
        img: "image/slider/image6.jpg",
    },
    {
        img: "image/slider/image7.jpg",
    },
    {
        img: "image/slider/image8.jpg",
    },

]