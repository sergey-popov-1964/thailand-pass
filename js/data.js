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
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. Commodi eos ex ipsum pariatur quam, quasi suscipit velit!",
        description: "Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании модели развития. С другой стороны реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Товарищи! реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации систем массового участия."
    },
    {
        img: "image/qrcode.jpeg",
        title: "Vaccination QR code",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. Commodi eos ex ipsum pariatur quam, quasi suscipit velit!",
        description: "Равным образом консультация с широким активом требуют от нас анализа существенных финансовых и административных условий. Повседневная практика показывает, что новая модель организационной деятельности способствует подготовки и реализации соответствующий условий активизации."
    },
    {
        img: "image/booking.png",
        title: "Hotel booking",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. Commodi eos ex ipsum pariatur quam, quasi suscipit velit!",
        description: "Задача организации, в особенности же консультация с широким активом влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Таким образом дальнейшее развитие различных форм деятельности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что реализация намеченных плановых заданий представляет собой интересный эксперимент проверки форм развития."
    },
    {
        img: "image/airticket.jpeg",
        title: "Air ticket",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. Commodi eos ex ipsum pariatur quam, quasi suscipit velit!",
        description: "Не следует, однако забывать, что новая модель организационной деятельности требуют определения и уточнения направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. С другой стороны консультация с широким активом требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности позволяет оценить значение направлений прогрессивного развития. Товарищи! новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Равным образом сложившаяся структура организации в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям."
    },
    {
        img: "image/pay_pcr.jpeg",
        title: "Reservation of PCR test",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. Commodi eos ex ipsum pariatur quam, quasi suscipit velit!",
        description: "Таким образом консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия. Равным образом укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Значимость этих проблем настолько очевидна, что сложившаяся структура организации играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации."
    },
    {
        img: "image/insurance.jpeg",
        title: "Insurance from Covid-19",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque illo inventore maiores quibusdam quo sit. Commodi eos ex ipsum pariatur quam, quasi suscipit velit!",
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