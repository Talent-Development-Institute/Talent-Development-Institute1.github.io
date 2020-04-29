
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
    'Blockchain Development with HL Fabric',
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
        '<a href="'+ibccHref+'">' + ibccTitleArr[i] + '</a>' +
        '</div>' +
        '<div class="fontSize12 courseDesc sectionMainFontFamilyThin  ">' + ibccDescArr[i] + ' </div>' +
        '</div>' +
        '</div>' +
        '</div>');
}

$("bgWhite").mouseover(function(){
    console.log('x')
    $("bgWhite").css("background-color", "yellow");
  });