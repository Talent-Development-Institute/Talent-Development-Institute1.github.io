var ibccHref = 'https://courses.talentdevelopment.institute/programs/ibcol';

var ibccTitleArr = [
    'Introduction & Challenges',
    'Blockchain Technology from First Principles',
    'Blockchain Business & Legal',
    'Blockchain Opportunities',
    'Identity & Privacy',
    'Asset Tokenization & Digital Fiat',
    'Blockchain Governance',
    'Blockchain Solutions Architecture',
    'Blockchain in Fintech',
    'Blockchain Development with Java',
    'Blockchain Development with R3 Corda',
    'Blockchain Development with HL Fabric'
];

var ibccDescArr = [
    'High-level introduction to blockchain; including what a blockchain is or is not. why blockchain is considered one of the most important technologies in recent days.',
    'Introduction to the fundamental building blocks of blockchain from high-level first principles and concepts: hash function cryptography, digital signatures, etc',
    'Explore from high-level some of the major use cases for applying blockchain and cryptography, especially in government, health, finance, and supply chain.',
    'A tour of the blockchain ecosystem and how you as current and recent students can benefit from it all. Talking about blockchain jobs: what they are, what they require, and how to acquire the skills needed',
    'Exploring the concept, need, importance and future of digital identity. Digital identity is the core of digital transaction. Knowledge of exactly who or what we are dealing with is a prerequisite of all communication and transaction.',
    'Exploring tokenization, the process of issuing a blockchain token that digitally represents a real tradable asset.',
    'This section covers blockchain governance. It begins by explaining what governance means for an organization. It then goes into exploring elements of off-chain and on-chain governance for both public and private blockchain.',
    'It builds on all previous sections to provide the necessities for applying blockchain and cryptography to build a decentralized application.',
    'Exploring the use of blockchain technology in the finance sector. Three blockchain experts from the financial industry will respectively discuss how blockchain is being used in the banking, insurance and trade finance industries.',
    'This is a review of Java, a popular programming language that is also used for writing applications in R3 Corda and Hyperledger Fabric.',
    'This is a technical crash course where students will develop a comprehensive understanding of Corda, an open-source enterprise permissioned platform created by R3 in 2016.',
    'This is a technical crash course where students will develop a comprehensive understanding of Hyperledger Fabric, an open-source enterprise permissioned blockchain platform created in 2016 with an initial contribution by Digital Asset and IBM',
];

var ibccImgArr = [
    './img/aboutPage/ibcc/BC100.png',
    './img/aboutPage/ibcc/BC101.png',
    './img/aboutPage/ibcc/BC102.png',
    './img/aboutPage/ibcc/BC200.png',
    './img/aboutPage/ibcc/BC201.png',
    './img/aboutPage/ibcc/BC202.png',
    './img/aboutPage/ibcc/BC203.png',
    './img/aboutPage/ibcc/BC204.png',
    './img/aboutPage/ibcc/BC205.png',
    './img/aboutPage/ibcc/BC300.png',
    './img/aboutPage/ibcc/BC301.png',
    './img/aboutPage/ibcc/BC302.png'

];

var ibccRow = document.getElementById('ibccRow');

for (let i = 0; i < ibccDescArr.length; i++) {
    ibccRow.innerHTML += (
        '<div class="col-4 bgWhite rowFrame mediaControl_ChangeToCol12">' +
        '<div class="row paddingForCourseFrame">' +
        '<div class="col-3 paddingForCourseIcons">' +
        '<img src="' + ibccImgArr[i] + '" class="courseIcons">' +
        '</div>' +
        '<div class="col-9 paddingForCourseInfo">' +
        '<div class="courseName sectionMainFontFamily fontSize16">' +
        '<a href="' + ibccHref + '">' + ibccTitleArr[i] + '</a>' +
        '</div>' +
        '<div class="fontSize12 courseDesc sectionMainFontFamilyThin  ">' + ibccDescArr[i] + ' </div>' +
        '</div>' +
        '</div>' +
        '</div>');
}










// data science
var dsHref = 'https://courses.talentdevelopment.institute/programs/ibcol';

var dsTitleArr = [
    'Introduction to Epidemiology',
    'Infectious Disease Modeling',
    'Advanced Mathematical Models and Case Studies',
    'Parameter Estimation Techniques',
    'Introduction to Julia',
    'Introduction to Control Flow in Julia',
    'Advanced Programming Concepts in Julia',
    'Data Science in Julia'
];

var dsDescArr = [
    'Discussing what epidemiology is and why it is important. We will introduce some tools and metrics used in epidemiology to evaluate the transmissibility and serenity of an infectious disease like COVID-19.',
    'Discussing one of the most important mathematical models used in epidemiology, compartmental models and show how we can use this model to simulate the spread of a disease.',
    'We will discuss two more mathematical models used in epidemiology. The first one is the SEIR model, which is a compartmental model, and the second one is the IDEA model. We will explore what they are and how they are applied to analyze the spread of a disease.',
    'Introducing some statistical quantities and tools to help us in parameter estimation. In data science, most of the time we need to estimate the parameters of a mathematical model. We will discuss how we can apply statistics to find the best parameters of a model.',
    'We will be looking at Julia from basics. We will set up the environment for running Julia and introduce the basic concept of programming and practice the concept in Julia.',
    'It will include branching and looping, and practice the concept in Julia by if-statement, while-statement and for-statement.',
    'We will be working with external files. The file either contains Julia code (module) or data(files). Furthermore, we will talk about some advanced concepts, such as exception and generic programming.',
    'We will be working with the Julia libraries that are related to Data Science. Furthermore, we will introduce the mathematics that related to data science and their implementations.'
];

var dsImgArr = [
    './img/aboutPage/ibcc/BC100.png',
    './img/aboutPage/ibcc/BC101.png',
    './img/aboutPage/ibcc/BC102.png',
    './img/aboutPage/ibcc/BC200.png',
    './img/aboutPage/ibcc/BC201.png',
    './img/aboutPage/ibcc/BC202.png',
    './img/aboutPage/ibcc/BC203.png',
    './img/aboutPage/ibcc/BC204.png',
    './img/aboutPage/ibcc/BC205.png',
    './img/aboutPage/ibcc/BC300.png',
    './img/aboutPage/ibcc/BC301.png',
    './img/aboutPage/ibcc/BC302.png'

];

var dsRow = document.getElementById('dsRow');

for (let i = 0; i < dsDescArr.length; i++) {
    dsRow.innerHTML += (
        '<div class="col-4 bgWhite rowFrame mediaControl_ChangeToCol12">' +
        '<div class="row paddingForCourseFrame">' +
        '<div class="col-3 paddingForCourseIcons">' +
        '<img src="' + dsImgArr[i] + '" class="courseIcons">' +
        '</div>' +
        '<div class="col-9 paddingForCourseInfo">' +
        '<div class="courseName sectionMainFontFamily fontSize16">' +
        '<a href="' + dsHref + '">' + dsTitleArr[i] + '</a>' +
        '</div>' +
        '<div class="fontSize12 courseDesc sectionMainFontFamilyThin  ">' + dsDescArr[i] + ' </div>' +
        '</div>' +
        '</div>' +
        '</div>');
}







// fintech
var ftHref = 'https://courses.talentdevelopment.institute/programs/ibcol';

var ftTitleArr = [
    ' Introduction to Basic Fixed Income Securities ',
    ' Introduction to Derivative Securities ',
    'Option Pricing in the Multi-Period Binomial Model ',
    ' Term Structure Models I ',
    ' Term Structure Models II and Introduction to Credit Derivatives ',
    ' General Introduction and Key Concepts ',
    ' Modern Portfolio Theory and Beyond ',
    ' Asset Allocation ',
    'Risk Management ',
    ' Introduction to Algorithmic Trading ',
    'Mean Reversion ',
    'Ensemble Methods',
    'Snooping and Bad Science '
];



var ftDescArr = [
    // '● Introduction to No-arbitrage <br>● Interest Rates and Fixed Income Instruments <br>● Floating Rate Bonds and Term Structure of Interest Rates <br>● Forward Contracts',
    // '● Swaps<br> ● Futures <br>● Options <br>● Options Pricing <br>● Basic Probability <br>● The 1-Period Binomial Model <br>● Option Pricing in the 1-Period Binomial Model',
    // '● The Multi-Period Binomial Model <br>● Pricing American Options <br>● Replicating Strategies<br> ● Including Dividends <br>● Pricing Forwards and Futures in the Binomial Model<br> ● An Example: Pricing a European Put on a Futures Contract',
    // '● Introduction to Term Structure Lattice Models <br>● The Cash Account and Pricing Zero-Coupon Bonds<br> ● Fixed Income Derivatives: Options on Bonds ● Fixed Income Derivatives: Bond Forwards ● Fixed Income Derivatives: Bond Futures <br>● Fixed Income Derivatives: Caplets and Floorlets <br>● Fixed Income Derivatives: Swaps and Swaptions <br>● The Forward Equations',
    // '● Hull White (HW) Model <br>● Model Calibration <br>● An Application: Pricing a Payer Swaption in a HW Model <br>● Fixed Income Derivatives Pricing in Practice',
    // '● Why you should choose this course <br>● Some common mistakes you will no longer make after this course – Portfolio risk <br>● Some common mistakes you will no longer make after this course – Free lunch<br> ● Distribution of returns - Graphical representation <br>● Distribution of returns - Numbers <br>● The risk-return trade-off',
    // '',
    // '',
    // '',
    // ''
];

var ftDescArr = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
];

var ftImgArr = [
    './img/aboutPage/ibcc/BC100.png',
    './img/aboutPage/ibcc/BC101.png',
    './img/aboutPage/ibcc/BC102.png',
    './img/aboutPage/ibcc/BC200.png',
    './img/aboutPage/ibcc/BC201.png',
    './img/aboutPage/ibcc/BC202.png',
    './img/aboutPage/ibcc/BC203.png',
    './img/aboutPage/ibcc/BC204.png',
    './img/aboutPage/ibcc/BC205.png',
    './img/aboutPage/ibcc/BC300.png',
    './img/aboutPage/ibcc/BC301.png',
    './img/aboutPage/ibcc/BC302.png'
];

var ftRow = document.getElementById('fintechRow');

for (let i = 0; i < ftTitleArr.length; i++) {
    ftRow.innerHTML += (
        '<div class="col-4 bgWhite rowFrame mediaControl_ChangeToCol12">' +
        '<div class="row paddingForCourseFrame">' +
        '<div class="col-3 paddingForCourseIcons">' +
        '<img src="' + ftImgArr[i] + '" class="courseIcons">' +
        '</div>' +
        '<div class="col-9 paddingForCourseInfo">' +
        '<div class="courseName sectionMainFontFamily fontSize16">' +
        '<a href="' + ftHref + '">' + ftTitleArr[i] + '</a>' +
        '</div>' +
        '<div class="fontSize12 courseDesc sectionMainFontFamilyThin  ">' + ftDescArr[i] + ' </div>' +
        '</div>' +
        '</div>' +
        '</div>');
}