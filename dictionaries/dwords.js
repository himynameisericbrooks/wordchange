const dwords = [
    'DA',
    'DAR',
    'DAT',
    'DBMS',
    'DC',
    'DD',
    'DDS',
    'DDT',
    'DE',
    'DEA',
    'DEC',
    'DH',
    'DHS',
    'DI',
    'DJ',
    'DMCA',
    'DMD',
    'DMZ',
    'DNA',
    'DOA',
    'DOB',
    'DOD',
    'DOE',
    'DOS',
    'DOT',
    'DP',
    'DPT',
    'DST',
    'DTP',
    'DUI',
    'DVD',
    'DVR',
    'DWI',
    'Dachau',
    'Dacron',
    'Dada',
    'Dadaism',
    'Daedalus',
    'Daguerre',
    'Dagwood',
    'Dahomey',
    'Daimler',
    'Daisy',
    'Dakar',
    'Dakota',
    'Dakotan',
    'Dalai',
    'Dale',
    'Daley',
    'Dali',
    'Dalian',
    'Dallas',
    'Dalmatia',
    'Dalmatian',
    'Dalton',
    'Dam',
    'Damn',
    'Damnit',
    'Damascus',
    'Dame',
    'Damian',
    'Damien',
    'Damion',
    'Damocles',
    'Damon',
    'Dan',
    'Dana',
    'Danae',
    'Danbury',
    'Dane',
    'Danelaw',
    'Dangerfield',
    'Danial',
    'Daniel',
    'Danielle',
    'Daniels',
    'Danish',
    'Dannie',
    'Danny',
    'Danone',
    'Dante',
    'Danton',
    'Danube',
    'Danubian',
    'Danville',
    'Daphne',
    'Darby',
    'Dark',
    'Darkness',
    'Darker',
    'Darcy',
    'Dardanelles',
    'Dare',
    'Daren',
    'Darfur',
    'Darin',
    'Dario',
    'Darius',
    'Darjeeling',
    'Darla',
    'Darlene',
    'Darling',
    'Darnell',
    'Darrel',
    'Darrell',
    'Darren',
    'Darrin',
    'Darrow',
    'Darryl',
    'Darth',
    'Dartmoor',
    'Dartmouth',
    'Darvon',
    'Darwin',
    'Darwinian',
    'Darwinism',
    'Darwinist',
    'Daryl',
    'Datamation',
    'Daugherty',
    'Daumier',
    'Davao',
    'Dave',
    'Davenport',
    'David',
    'Davidson',
    'Davies',
    'Davis',
    'Davy',
    'Dawes',
    'Dawg',
    'Dawkins',
    'Dawn',
    'Dawson',
    'Day',
    'Dayan',
    'Dayton',
    'DeGeneres',
    'DeKalb',
    'Deadhead',
    'Dean',
    'Deana',
    'Deandre',
    'Deann',
    'Deanna',
    'Deanne',
    'Death',
    'Debbie',
    'Debby',
    'Debian',
    'Debora',
    'Deborah',
    'Debouillet',
    'Debra',
    'Debs',
    'Debussy',
    'Dec',
    'Decalogue',
    'Decatur',
    'Decca',
    'Deccan',
    'December',
    'Decker',
    'Dedekind',
    'Dee',
    'Deena',
    'Deere',
    'Defoe',
    'Degas',
    'Deidre',
    'Deimos',
    'Deirdre',
    'Deity',
    'Dejesus',
    'Del',
    'Delacroix',
    'Delacruz',
    'Delaney',
    'Delano',
    'Delaware',
    'Delawarean',
    'Delbert',
    'Deleon',
    'Delgado',
    'Delhi',
    'Delia',
    'Delibes',
    'Delicious',
    'Delilah',
    'Delilahs',
    'Delius',
    'Dell',
    'Della',
    'Delmar',
    'Delmarva',
    'Delmer',
    'Delmonico',
    'Delores',
    'Deloris',
    'Delphi',
    'Delphic',
    'Delphinus',
    'Delta',
    'Deltona',
    'Dem',
    'Demavend',
    'Demerol',
    'Demeter',
    'Demetrius',
    'Deming',
    'Democrat',
    'Democratic',
    'Democritus',
    'Demosthenes',
    'Dempsey',
    'Dena',
    'Denali',
    'Deneb',
    'Denebola',
    'Deng',
    'Denis',
    'Denise',
    'Denmark',
    'Dennis',
    'Denny',
    'Denton',
    'Denver',
    'Deon',
    'Depp',
    'Derby',
    'Derek',
    'Derick',
    'Dermot',
    'Derrick',
    'Derrida',
    'Descartes',
    'Desdemona',
    'Desiree',
    'Desmond',
    'Detroit',
    'Deuteronomy',
    'Devanagari',
    'Devi',
    'Devin',
    'Devon',
    'Devonian',
    'Dewar',
    'Dewayne',
    'Dewey',
    'Dewitt',
    'Dexedrine',
    'Dexter',
    'Dhaka',
    'Dhaulagiri',
    'Di',
    'DiCaprio',
    'DiMaggio',
    'Diaghilev',
    'Dial',
    'Diana',
    'Diane',
    'Diann',
    'Dianna',
    'Dianne',
    'Dias',
    'Diaspora',
    'Dick',
    'Dickens',
    'Dickensian',
    'Dickerson',
    'Dickinson',
    'Dickson',
    'Dictaphone',
    'Diderot',
    'Dido',
    'Didrikson',
    'Diefenbaker',
    'Diego',
    'Diem',
    'Dietrich',
    'Dijkstra',
    'Dijon',
    'Dilbert',
    'Dildo',
    'Dillard',
    'Ditch',
    'Ditches',
    'Dillinger',
    'Dillon',
    'Dina',
    'Dinah',
    'Dino',
    'Diocletian',
    'Diogenes',
    'Dion',
    'Dionne',
    'Dionysian',
    'Dionysus',
    'Diophantine',
    'Dior',
    'Dipper',
    'Dir',
    'Dirac',
    'Dirichlet',
    'Dirk',
    'Dis',
    'Disney',
    'Disneyland',
    'Disraeli',
    'Divine',
    'Diwali',
    'Dix',
    'Dixie',
    'Dixiecrat',
    'Dixieland',
    'Dixon',
    'Django',
    'Djibouti',
    'Dmitri',
    'Dnepropetrovsk',
    'Dniester',
    'Dobbin',
    'Doberman',
    'Dobro',
    'Doctor',
    'Doctorow',
    'Dodge',
    'Dodgson',
    'Dodoma',
    'Dodson',
    'Dog',
    'Dogs',
    'Doggies',
    'Doe',
    'Doha',
    'Dolby',
    'Dole',
    'Dollie',
    'Dolly',
    'Dolores',
    'Domesday',
    'Domingo',
    'Dominguez',
    'Dominic',
    'Dominica',
    'Dominican',
    'Dominick',
    'Dominion',
    'Dominique',
    'Domitian',
    'Don',
    'Dona',
    'Donahue',
    'Donald',
    'Donaldson',
    'Donatello',
    'Donetsk',
    'Donizetti',
    'Donn',
    'Donna',
    'Donne',
    'Donnell',
    'Donner',
    'Donnie',
    'Donny',
    'Donovan',
    'Dooley',
    'Doolittle',
    'Doonesbury',
    'Doppler',
    'Dora',
    'Dorcas',
    'Doreen',
    'Dorian',
    'Doric',
    'Doris',
    'Doritos',
    'Dorothea',
    'Dorothy',
    'Dorset',
    'Dorsey',
    'Dorthy',
    'Dortmund',
    'Dostoevsky',
    'Dot',
    'Dothan',
    'Dotson',
    'Douala',
    'Douay',
    'Doubleday',
    'Doug',
    'Douglas',
    'Douglass',
    'Douro',
    'Dover',
    'Dow',
    'Downs',
    'Downy',
    'Doyle',
    'Dr',
    'Drab',
    'Draco',
    'Draconian',
    'Dracula',
    'Dragon',
    'Drake',
    'Dramamine',
    'Drambuie',
    'Drano',
    'Dravidian',
    'Dreiser',
    'Dresden',
    'Drew',
    'Dreyfus',
    'Drip',
    'Dristan',
    'Dropbox',
    'Drug',
    'Drugs',
    'Druggie',
    'Drudge',
    'Drupal',
    'Dryden',
    'Dschubba',
    'Du',
    'DuPont',
    'Duane',
    'Dubai',
    'Dubcek',
    'Dubhe',
    'Dublin',
    'Dubrovnik',
    'Dubuque',
    'Duchamp',
    'Dudley',
    'Duffy',
    'Duisburg',
    'Duke',
    'Dulles',
    'Duluth',
    'Dumas',
    'Dumbledore',
    'Dumbo',
    'Dump',
    'Dumps',
    'Dumptruck',
    'Dumper',
    'Dumpster',
    'Dumpling',
    'Dunant',
    'Dunbar',
    'Duncan',
    'Dundee',
    'Dunedin',
    'Dunkirk',
    'Dunlap',
    'Dunn',
    'Dunne',
    'Duracell',
    'Duran',
    'Durant',
    'Durante',
    'Durban',
    'Durer',
    'Durex',
    'Durham',
    'Durkheim',
    'Duroc',
    'Durocher',
    'Duse',
    'Dushanbe',
    'Dusseldorf',
    'Dustbuster',
    'Dustin',
    'Dusty',
    'Dutch',
    'Dutchman',
    'Dutchmen',
    'Dutchwoman',
    'Duvalier',
    'Dvina',
    'Dvorak',
    'Dwayne',
    'Dwight',
    'Dy',
    'Dyer',
    'Dylan',
    'Dynamo',
    'Dyson',
    'Dzerzhinsky',
    'Dzungaria'
];

module.exports = {
    dwords
}