// Здесь заносятся данные? которые будут отображаться в блоке Answer & Question
//question - текст вопроса
//answer - текст ответа

const qa = [
    {
        question: "What is Thaipass?",
        answer: "Thailand Pass is a web-based system for Thai, and foreign travellers to fill in their travel, and health information. Upon approval you receive a QR code which will allow you to travel to Thailand (you will still need to meet visa requirements)."
    },
    {
        question: "Who needs Thaipass?",
        answer: "Thailand Pass is required for Thai and foreigners to enter Thailand including those nationalities under the Visa Exemption and Visa on Arrival list. The Test and Go Hotel, AQ Hotel, SHA+ Hotel reservation, and COVID-19 Insurance with a minimum coverage of $20,000 are still required for foreigners entering Thailand."
    },
    {
        question: "What is Phuket sandbox?",
        answer: "Phuket Sandbox is a program that allows foreign travelers to visit Phuket province without having to undergo quarantine. They must have a negative RT-PCR test result before they can enjoy traveling and do leisure activities throughout Phuket."
    },
    {
        question: "How long is Thaipass valid?",
        answer: "Even with the visa exemption scheme, travelers still need to apply for a Thailand Pass (click here to register) in order to enter Thailand. This Visa is for tourism purposes only. This Visa is valid for 3 months from the date of issuance."
    },
    {
        question: "How much does the Thaipass cost?",
        answer: "You won't need to pay anything for your Thailand Pass as it is a free-of-charge web-based system designed to optimize the documentation processes of travelers entering Thailand. After you complete the application, your pass will be processed, and you'll receive a QR code within 7 days (more about this later)."
    },
]


// Здесь заносятся данные? которые будут отображаться в блоке What you need for Thailand Pass
//img - ссылка на изображение
//title - текст заголовка карточки
//text - текст, который будет отображаться в карточке
//description - текст, который будет отображаться во всплывающем окне при нажатии на кнопку READ MORE

const thaipassDate = [
    {
        img: "image/passport.jpeg",
        title: "Passport",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. Commodi eos ex ipsum pariatur quam, quasi suscipit velit!",
        description: "Равным образом укрепление и развитие структуры позволяет оценить значение систем массового участия. Повседневная практика показывает, что консультация с широким активом требуют от нас анализа систем массового участия. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции способствует подготовки и реализации существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Не следует, однако забывать, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации систем массового участия."
    },
    {
        img: "image/certificate.jpeg",
        title: "Vaccination Certificate",
        text: "Fully vaccinated against COVID-19 no less than 14 days before travelling",
        description: "Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании модели развития. С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Товарищи! реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации систем массового участия."
    },
    {
        img: "image/qrcode.jpeg",
        title: "Vaccination QR code",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
            "",
        description: "Равным образом консультация с широким активом требуют от нас анализа существенных финансовых и административных условий. Повседневная практика показывает, что новая модель организационной деятельности способствует подготовки и реализации соответствующий условий активизации."
    },
    {
        img: "image/booking.png",
        title: "Hotel booking",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores " +
            "",
        description: "Задача организации, в особенности же консультация с широким активом влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Таким образом дальнейшее развитие различных форм деятельности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что реализация намеченных плановых заданий представляет собой интересный эксперимент проверки форм развития."
    },
    {
        img: "image/airticket.jpeg",
        title: "Air ticket",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. C" +
            "",
        description: "Не следует, однако забывать, что новая модель организационной деятельности требуют определения и уточнения направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. С другой стороны консультация с широким активом требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности позволяет оценить значение направлений прогрессивного развития. Товарищи! новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Равным образом сложившаяся структура организации в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям."
    },
    {
        img: "image/pay_pcr.jpeg",
        title: "Reservation of PCR test",
        text: "Insurance with minimum coverage of 20,000 USD (not required for Thai nationals / foreign residents in Thailand can use social security or certificate from their employer)",
        description: "Таким образом консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия. Равным образом укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Значимость этих проблем настолько очевидна, что сложившаяся структура организации играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации."
    },
    {
        img: "image/insurance.jpeg",
        title: "Insurance from Covid-19",
        text: "Insurance with minimum coverage of 20,000 USD (not required for Thai nationals / foreign residents in Thailand can use social security or certificate from their employer)",
        description: "Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение дальнейших направлений развития. Идейные соображения высшего порядка, а также новая модель организационной деятельности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач."
    },
]

// Здесь заносятся данные? которые будут отображаться в блоке What you need for Test & Go
//img - ссылка на изображение
//title - текст заголовка карточки
//text - текст, который будет отображаться в карточке
//description - текст, который будет отображаться во всплывающем окне при нажатии на кнопку READ MORE

const testGoDate = [
    {
        img: "image/thailand_pass.jpeg",
        title: "Thailand Pass",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. Commodi eos ex ipsum pariatur quam, quasi suscipit velit!",
        description: "Равным образом укрепление и развитие структуры позволяет оценить значение систем массового участия. Повседневная практика показывает, что консультация с широким активом требуют от нас анализа систем массового участия. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции способствует подготовки и реализации существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Не следует, однако забывать, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации систем массового участия."
    },
    {
        img: "image/pcr_test.jpeg",
        title: "PCR test",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. Commodi eos ex ipsum pariatur quam, quasi suscipit velit!",
        description: "Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании модели развития. С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Товарищи! реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации систем массового участия."
    },
    {
        img: "image/vaccine.jpeg",
        title: "Vaccination with an approved vaccine",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. Commodi eos ex ipsum pariatur quam, quasi suscipit velit!",
        description: "Равным образом консультация с широким активом требуют от нас анализа существенных финансовых и административных условий. Повседневная практика показывает, что новая модель организационной деятельности способствует подготовки и реализации соответствующий условий активизации."
    },
    {
        img: "image/insurance.jpeg",
        title: "Medical insurance",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. Commodi eos ex ipsum pariatur quam, quasi suscipit velit!",
        description: "Задача организации, в особенности же консультация с широким активом влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Таким образом дальнейшее развитие различных форм деятельности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что реализация намеченных плановых заданий представляет собой интересный эксперимент проверки форм развития."
    },
    {
        img: "image/sha.jpeg",
        title: "First day at the SPA Extra+ Hotel",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. Commodi eos ex ipsum pariatur quam, quasi suscipit velit!",
        description: "Не следует, однако забывать, что новая модель организационной деятельности требуют определения и уточнения направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. С другой стороны консультация с широким активом требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности позволяет оценить значение направлений прогрессивного развития. Товарищи! новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Равным образом сложившаяся структура организации в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям."
    },
    {
        img: "image/pay_pcr.jpeg",
        title: "Payment for PCR test",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. Commodi eos ex ipsum pariatur quam, quasi suscipit velit!",
        description: "Таким образом консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия. Равным образом укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Значимость этих проблем настолько очевидна, что сложившаяся структура организации играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации."
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
        description: ""
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
        text: "From the second to the fourth days, you can relax and travel throughout Thailand without restrictions",
        description: ""
    },
    {
        img: "image/going/rapid.jpeg",
        title: "9. Rapid coronavirus test",
        text: "On the fifth day of rest in Thailand, an independent rapid test for coronavirus is conducted. The test is conducted at the hotel. The results are ready in 10-30 minutes.",
        description: ""
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