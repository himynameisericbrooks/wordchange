const cwords = [
    'CA',
    'CAD',
    'CAI',
    'CAM',
    'CAP',
    'CARE',
    'CATV',
    'CB',
    'CBC',
    'CBS',
    'CCTV',
    'CCU',
    'CD',
    'CDC',
    'CDT',
    'CEO',
    'CF',
    'CFC',
    'CFO',
    'CGI',
    'CIA',
    'CID',
    'CNN',
    'CNS',
    'CO',
    'COBOL',
    'COD',
    'COL',
    'COLA',
    'COVID',
    'CPA',
    'CPI',
    'CPO',
    'CPR',
    'CPU',
    'CRT',
    'CSS',
    'CST',
    'CT',
    'CV',
    'CVS',
    'CZ',
    'Ca',
    'Cabernet',
    'Cabot',
    'Cabral',
    'Cabrera',
    'Cabrini',
    'Cadette',
    'Cadillac',
    'Cadiz',
    'Caedmon',
    'Caerphilly',
    'Caesar',
    'Cage',
    'Cagney',
    'Cahokia',
    'Caiaphas',
    'Cain',
    'Cairo',
    'Caitlin',
    'Cajun',
    'Cal',
    'Calais',
    'Calcutta',
    'Calder',
    'Calderon',
    'Caldwell',
    'Caleb',
    'Caledonia',
    'Calexico',
    'Calgary',
    'Calhoun',
    'Cali',
    'Caliban',
    'Calif',
    'California',
    'Californian',
    'Caligula',
    'Callaghan',
    'Callahan',
    'Callao',
    'Callas',
    'Callie',
    'Calliope',
    'Callisto',
    'Caloocan',
    'Calvary',
    'Calvert',
    'Calvin',
    'Calvinism',
    'Calvinist',
    'Calvinistic',
    'Camacho',
    'Camarillo',
    'Cambodia',
    'Cambodian',
    'Cambrian',
    'Cambridge',
    'Camden',
    'Camel',
    'Camelopardalis',
    'Camelot',
    'Camembert',
    'Cameron',
    'Cameroon',
    'Cameroonian',
    'Camilla',
    'Camille',
    'Camoens',
    'Campanella',
    'Campbell',
    'Campinas',
    'Campos',
    'Camry',
    'Camus',
    'Can',
    'Canaan',
    'Canaanite',
    'Canad',
    'Canada',
    'Canadian',
    'Canadianism',
    'Canaletto',
    'Canaries',
    'Canaveral',
    'Canberra',
    'Cancer',
    'Cancun',
    'Candace',
    'Candice',
    'Candide',
    'Candy',
    'Cannes',
    'Cannon',
    'Canon',
    'Canopus',
    'Cantabrigian',
    'Canterbury',
    'Canton',
    'Cantonese',
    'Cantor',
    'Cantrell',
    'Cantu',
    'Canute',
    'Capablanca',
    'Capek',
    'Capella',
    'Capet',
    'Capetian',
    'Capetown',
    'Caph',
    'Capistrano',
    'Capitol',
    'Capitoline',
    'Capone',
    'Capote',
    'Capra',
    'Capri',
    'Capricorn',
    'Capt',
    'Capuchin',
    'Capulet',
    'Cara',
    'Caracalla',
    'Caracas',
    'Caravaggio',
    'Carboloy',
    'Carbondale',
    'Carboniferous',
    'Carborundum',
    'Cardenas',
    'Cardiff',
    'Cardin',
    'Cardozo',
    'Carey',
    'Carib',
    'Caribbean',
    'Carina',
    'Carissa',
    'Carl',
    'Carla',
    'Carlene',
    'Carlin',
    'Carlo',
    'Carlos',
    'Carlsbad',
    'Carlson',
    'Carlton',
    'Carly',
    'Carlyle',
    'Carmela',
    'Carmella',
    'Carmelo',
    'Carmen',
    'Carmichael',
    'Carmine',
    'Carnap',
    'Carnation',
    'Carnegie',
    'Carney',
    'Carnot',
    'Carol',
    'Carole',
    'Carolina',
    'Caroline',
    'Carolingian',
    'Carolinian',
    'Carolyn',
    'Carpathian',
    'Carpathians',
    'Carpenter',
    'Carr',
    'Carranza',
    'Carrie',
    'Carrier',
    'Carrillo',
    'Carroll',
    'Carson',
    'Carter',
    'Cartersville',
    'Cartesian',
    'Carthage',
    'Carthaginian',
    'Cartier',
    'Cartwright',
    'Caruso',
    'Carver',
    'Cary',
    'Casablanca',
    'Casals',
    'Casandra',
    'Casanova',
    'Cascades',
    'Case',
    'Casey',
    'Cash',
    'Casio',
    'Caspar',
    'Casper',
    'Caspian',
    'Cassandra',
    'Cassatt',
    'Cassidy',
    'Cassie',
    'Cassiopeia',
    'Cassius',
    'Castaneda',
    'Castilian',
    'Castillo',
    'Castlereagh',
    'Castor',
    'Castries',
    'Castro',
    'Cat',
    'Cats',
    'Catalan',
    'Catalina',
    'Catalonia',
    'Catawba',
    'Caterpillar',
    'Cathay',
    'Cather',
    'Catherine',
    'Cathleen',
    'Catholic',
    'Catholicism',
    'Cathryn',
    'Cathy',
    'Catiline',
    'Cato',
    'Catskill',
    'Catskills',
    'Catt',
    'Catullus',
    'Caucasian',
    'Caucasoid',
    'Caucasus',
    'Cauchy',
    'Cavendish',
    'Cavour',
    'Caxton',
    'Cayenne',
    'Cayman',
    'Cayuga',
    'Cayuse',
    'Cb',
    'Cd',
    'Ce',
    'Ceausescu',
    'Cebu',
    'Cebuano',
    'Cecelia',
    'Cecil',
    'Cecile',
    'Cecilia',
    'Cecily',
    'Cedric',
    'Celeste',
    'Celgene',
    'Celia',
    'Celina',
    'Cellini',
    'Celsius',
    'Celt',
    'Celtic',
    'Cenozoic',
    'Centaurus',
    'Centigrade',
    'Central',
    'Cepheid',
    'Cepheus',
    'Cerberus',
    'Cerenkov',
    'Ceres',
    'Cerf',
    'Cervantes',
    'Cesar',
    'Cesarean',
    'Cessna',
    'Cetus',
    'Ceylon',
    'Ceylonese',
    'Cezanne',
    'Cf',
    'Chin',
    'Ch',
    'Chablis',
    'Chad',
    'Chadian',
    'Chadwick',
    'Chagall',
    'Chaitanya',
    'Chaitin',
    'Chaldea',
    'Chaldean',
    'Challenger',
    'Chalmers',
    'Chamberlain',
    'Chambers',
    'Chambersburg',
    'Champaign',
    'Champlain',
    'Champollion',
    'Chan',
    'Chance',
    'Chancellorsville',
    'Chandigarh',
    'Chandler',
    'Chandon',
    'Chandra',
    'Chandragupta',
    'Chandrasekhar',
    'Chanel',
    'Chaney',
    'Chang',
    'Changchun',
    'Changsha',
    'Chantilly',
    'Chaplin',
    'Chaplinesque',
    'Chapman',
    'Chappaquiddick',
    'Chapultepec',
    'Charbray',
    'Chardonnay',
    'Charity',
    'Charlemagne',
    'Charlene',
    'Charles',
    'Charleston',
    'Charley',
    'Charlie',
    'Charlotte',
    'Charlottesville',
    'Charlottetown',
    'Charmaine',
    'Charmin',
    'Charolais',
    'Charon',
    'Chartism',
    'Chartres',
    'Charybdis',
    'Chase',
    'Chasity',
    'Chateaubriand',
    'Chattahoochee',
    'Chattanooga',
    'Chatterley',
    'Chatterton',
    'Chaucer',
    'Chauncey',
    'Chautauqua',
    'Chavez',
    'Chayefsky',
    'Che',
    'Chechen',
    'Chechnya',
    'Cheddar',
    'Cheer',
    'Cheerios',
    'Cheetos',
    'Cheever',
    'Chekhov',
    'Chekhovian',
    'Chelsea',
    'Chelyabinsk',
    'Chen',
    'Cheney',
    'Chengdu',
    'Chennai',
    'Cheops',
    'Cheri',
    'Cherie',
    'Chernenko',
    'Chernobyl',
    'Chernomyrdin',
    'Cherokee',
    'Cherry',
    'Cheryl',
    'Chesapeake',
    'Cheshire',
    'Chester',
    'Chesterfield',
    'Chesterton',
    'Chevalier',
    'Cheviot',
    'Chevrolet',
    'Chevron',
    'Chevy',
    'Cheyenne',
    'Chi',
    'Chianti',
    'Chiba',
    'Chibcha',
    'Chicago',
    'Chicagoan',
    'Chicana',
    'Chicano',
    'Chickasaw',
    'Chiclets',
    'Chico',
    'Chihuahua',
    'Chile',
    'Chilean',
    'Chimborazo',
    'Chimera',
    'Chimu',
    'Chin',
    'China',
    'Chinatown',
    'Chinese',
    'Chinook',
    'Chipewyan',
    'Chippendale',
    'Chippewa',
    'Chiquita',
    'Chirico',
    'Chisholm',
    'Chisinau',
    'Chittagong',
    'Chivas',
    'Chloe',
    'Choctaw',
    'Chomsky',
    'Chongqing',
    'Chopin',
    'Chopra',
    'Chou',
    'Chretien',
    'Chris',
    'Christ',
    'Christa',
    'Christchurch',
    'Christendom',
    'Christensen',
    'Christi',
    'Christian',
    'Christianity',
    'Christianize',
    'Christie',
    'Christina',
    'Christine',
    'Christlike',
    'Christmas',
    'Christmastide',
    'Christmastime',
    'Christoper',
    'Christopher',
    'Chromebook',
    'Chronicles',
    'Chrysler',
    'Chrysostom',
    'Chrystal',
    'Chuck',
    'Chukchi',
    'Chumash',
    'Chung',
    'Church',
    'Churchill',
    'Churriguera',
    'Chuvash',
    'Ci',
    'Cicero',
    'Cid',
    'Cimabue',
    'Cincinnati',
    'Cinderella',
    'Cindy',
    'CinemaScope',
    'Cinerama',
    'Cipro',
    'Circe',
    'Cisco',
    'Citibank',
    'Citigroup',
    'Citroen',
    'Cl',
    'Claiborne',
    'Clair',
    'Claire',
    'Clairol',
    'Clancy',
    'Clapeyron',
    'Clapton',
    'Clara',
    'Clare',
    'Clarence',
    'Clarendon',
    'Clarice',
    'Clarissa',
    'Clark',
    'Clarke',
    'Clarksville',
    'Claude',
    'Claudette',
    'Claudia',
    'Claudine',
    'Claudio',
    'Claudius',
    'Claus',
    'Clausewitz',
    'Clausius',
    'Clay',
    'Clayton',
    'Clearasil',
    'Clem',
    'Clemenceau',
    'Clemens',
    'Clement',
    'Clementine',
    'Clements',
    'Clemons',
    'Clemson',
    'Cleo',
    'Cleopatra',
    'Cleveland',
    'Cliburn',
    'Cliff',
    'Clifford',
    'Clifton',
    'Cline',
    'Clint',
    'Clinton',
    'Clio',
    'Clive',
    'Clojure',
    'Clorets',
    'Clorox',
    'Closure',
    'Clotho',
    'Clouseau',
    'Clovis',
    'Clyde',
    'Clydesdale',
    'Clytemnestra',
    'Cm',
    'Cmdr',
    'Co',
    'Cobain',
    'Cobb',
    'Cochabamba',
    'Cochin',
    'Cochise',
    'Cochran',
    'Cockney',
    'Cocteau',
    'Cod',
    'Cody',
    'Coffey',
    'Cognac',
    'Cohan',
    'Cohen',
    'Coimbatore',
    'Cointreau',
    'Coke',
    'Col',
    'Colbert',
    'Colby',
    'Cole',
    'Coleen',
    'Coleman',
    'Coleridge',
    'Colette',
    'Colfax',
    'Colgate',
    'Colin',
    'Colleen',
    'Collier',
    'Collin',
    'Collins',
    'Colo',
    'Cologne',
    'Colombia',
    'Colombian',
    'Colombo',
    'Colon',
    'Coloradan',
    'Colorado',
    'Coloradoan',
    'Colosseum',
    'Colt',
    'Coltrane',
    'Columbia',
    'Columbine',
    'Columbus',
    'Com',
    'Comanche',
    'Combs',
    'Comdr',
    'Comintern',
    'Commandment',
    'Commons',
    'Commonwealth',
    'Communion',
    'Communism',
    'Communist',
    'Como',
    'Comoran',
    'Comoros',
    'Compaq',
    'Compton',
    'CompuServe',
    'Comte',
    'Conakry',
    'Conan',
    'Concepcion',
    'Concetta',
    'Concord',
    'Concorde',
    'Condillac',
    'Condorcet',
    'Conestoga',
    'Confederacy',
    'Confederate',
    'Confucian',
    'Confucianism',
    'Confucius',
    'Cong',
    'Congo',
    'Congolese',
    'Congregational',
    'Congregationalist',
    'Congress',
    'Congressional',
    'Congreve',
    'Conley',
    'Conn',
    'Connecticut',
    'Connellsville',
    'Connemara',
    'Conner',
    'Connery',
    'Connie',
    'Connolly',
    'Connors',
    'Conrad',
    'Conrail',
    'Conroe',
    'Conservative',
    'Constable',
    'Constance',
    'Constantine',
    'Constantinople',
    'Constitution',
    'Consuelo',
    'Continent',
    'Continental',
    'Contreras',
    'Conway',
    'Cook',
    'Cooke',
    'Cooley',
    'Coolidge',
    'Cooper',
    'Cooperstown',
    'Coors',
    'Copacabana',
    'Copeland',
    'Copenhagen',
    'Copernican',
    'Copernicus',
    'Copland',
    'Copley',
    'Copperfield',
    'Coppertone',
    'Coppola',
    'Coptic',
    'Cora',
    'Cordelia',
    'Cordilleras',
    'Cordoba',
    'Corey',
    'Corfu',
    'Corina',
    'Corine',
    'Corinne',
    'Corinth',
    'Corinthian',
    'Corinthians',
    'Coriolanus',
    'Coriolis',
    'Cork',
    'Corleone',
    'Cormack',
    'Corneille',
    'Cornelia',
    'Cornelius',
    'Cornell',
    'Corning',
    'Cornish',
    'Cornwall',
    'Cornwallis',
    'Coronado',
    'Corot',
    'Corp',
    'Correggio',
    'Corrine',
    'Corsica',
    'Corsican',
    'Cortes',
    'Cortland',
    'Corvallis',
    'Corvette',
    'Corvus',
    'Cory',
    'Cosby',
    'CosmosDB',
    'Cossack',
    'Costco',
    'Costello',
    'Costner',
    'Cote',
    'Cotonou',
    'Cotopaxi',
    'Cotswold',
    'Cotton',
    'Coulomb',
    'Coulter',
    'Couperin',
    'Courbet',
    'Courtney',
    'Cousteau',
    'Coventry',
    'Covington',
    'Coward',
    'Cowell',
    'Cowley',
    'Cowper',
    'Cox',
    'Coy',
    'Coyle',
    'Cozumel',
    'Cpl',
    'Cr',
    'Crabbe',
    'Craft',
    'Craig',
    'Cranach',
    'Crane',
    'Cranmer',
    'Crater',
    'Crawford',
    'Cray',
    'Crayola',
    'Creation',
    'Creator',
    'Crecy',
    'Cree',
    'Creek',
    'Creighton',
    'Creole',
    'Creon',
    'Cressida',
    'Crest',
    'Cretaceous',
    'Cretan',
    'Crete',
    'Crichton',
    'Crick',
    'Crimea',
    'Crimean',
    'Criollo',
    'Crisco',
    'Cristina',
    'Croat',
    'Croatia',
    'Croatian',
    'Croce',
    'Crockett',
    'Croesus',
    'Cromwell',
    'Cromwellian',
    'Cronin',
    'Cronkite',
    'Cronus',
    'Crookes',
    'Crosby',
    'Cross',
    'Crow',
    'Crowley',
    'Crucifixion',
    'Cruikshank',
    'Cruise',
    'Crusadess',
    'Crusoe',
    'Crux',
    'Cruz',
    'Cryptozoic',
    'Crystal',
    'Csonka',
    'Ct',
    'Ctesiphon',
    'Cthulhu',
    'Cu',
    'Cuba',
    'Cuban',
    'Cuchulain',
    'Cuisinart',
    'Culbertson',
    'Cullen',
    'Cumberland',
    'Cummings',
    'Cunard',
    'Cunningham',
    'Cupid',
    'Curacao',
    'Curie',
    'Curitiba',
    'Currier',
    'Curry',
    'Curt',
    'Curtis',
    'Custer',
    'Cuvier',
    'Cuzco',
    'Cybele',
    'Cyclades',
    'Cyclopes',
    'Cyclops',
    'Cygnus',
    'Cymbeline',
    'Cynthia',
    'Cyprian',
    'Cypriot',
    'Cyprus',
    'Cyrano',
    'Cyril',
    'Cyrillic',
    'Cyrus',
    'Czech',
    'Czechia',
    'Czechoslovak',
    'Czechoslovakia',
    'Czechoslovakian',
    'Czechs',
    'Czerny'
];

module.exports = {
    cwords
}