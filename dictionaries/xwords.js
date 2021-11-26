const xwords = [
    'XANTHAM',
    'XANTHAMS',
    'XANTHAN',
    'XANTHANS',
    'XANTHATE',
    'XANTHATES',
    'XANTHATION',
    'XANTHATIONS',
    'XANTHEIN',
    'XANTHEINS',
    'XANTHENE',
    'XANTHENES',
    'XANTHIC',
    'XANTHIN',
    'XANTHINE',
    'XANTHINES',
    'XANTHINS',
    'XANTHISM',
    'XANTHISMS',
    'XANTHOCHROIA',
    'XANTHOCHROIAS',
    'XANTHOCHROIC',
    'XANTHOCHROID',
    'XANTHOCHROIDS',
    'XANTHOCHROISM',
    'XANTHOCHROISMS',
    'XANTHOCHROMIA',
    'XANTHOCHROMIAS',
    'XANTHOCHROOUS',
    'XANTHOMA',
    'XANTHOMAS',
    'XANTHOMATA',
    'XANTHOMATOUS',
    'XANTHOMELANOUS',
    'XANTHONE',
    'XANTHONES',
    'XANTHOPHYL',
    'XANTHOPHYLL',
    'XANTHOPHYLLOUS',
    'XANTHOPHYLLS',
    'XANTHOPHYLS',
    'XANTHOPSIA',
    'XANTHOPSIAS',
    'XANTHOPTERIN',
    'XANTHOPTERINE',
    'XANTHOPTERINES',
    'XANTHOPTERINS',
    'XANTHOUS',
    'XANTHOXYL',
    'XANTHOXYLS',
    'XEBEC',
    'XEBECS',
    'XED',
    'XENARTHRAL',
    'XENIA',
    'XENIAL',
    'XENIAS',
    'XENIC',
    'XENIUM',
    'XENOBIOTIC',
    'XENOBIOTICS',
    'XENOBLAST',
    'XENOBLASTS',
    'XENOCRYST',
    'XENOCRYSTS',
    'XENODIAGNOSES',
    'XENODIAGNOSIS',
    'XENODIAGNOSTIC',
    'XENODOCHIUM',
    'XENODOCHIUMS',
    'XENOGAMIES',
    'XENOGAMOUS',
    'XENOGAMY',
    'XENOGENEIC',
    'XENOGENESES',
    'XENOGENESIS',
    'XENOGENETIC',
    'XENOGENIC',
    'XENOGENIES',
    'XENOGENOUS',
    'XENOGENY',
    'XENOGLOSSIA',
    'XENOGLOSSIAS',
    'XENOGLOSSIES',
    'XENOGLOSSY',
    'XENOGRAFT',
    'XENOGRAFTS',
    'XENOLITH',
    'XENOLITHIC',
    'XENOLITHS',
    'XENOMANIA',
    'XENOMANIAS',
    'XENOMENIA',
    'XENOMENIAS',
    'XENOMORPHIC',
    'XENOMORPHICALLY',
    'XENON',
    'XENONS',
    'XENOPHILE',
    'XENOPHILES',
    'XENOPHOBE',
    'XENOPHOBES',
    'XENOPHOBIA',
    'XENOPHOBIAS',
    'XENOPHOBIC',
    'XENOPHOBICALLY',
    'XENOPHOBIES',
    'XENOPHOBY',
    'XENOPHYA',
    'XENOPLASTIC',
    'XENOPUS',
    'XENOPUSES',
    'XENOTIME',
    'XENOTIMES',
    'XENOTRANSPLANT',
    'XENOTRANSPLANTS',
    'XENOTROPIC',
    'XENURINE',
    'XENURINES',
    'XERAFIN',
    'XERAFINS',
    'XERANSES',
    'XERANSIS',
    'XERANTHEMUM',
    'XERANTHEMUMS',
    'XERANTIC',
    'XERAPHIN',
    'XERAPHINS',
    'XERARCH',
    'XERASIA',
    'XERASIAS',
    'XERIC',
    'XERICALLY',
    'XERISCAPE',
    'XERISCAPED',
    'XERISCAPES',
    'XERISCAPING',
    'XEROCHASIES',
    'XEROCHASY',
    'XERODERMA',
    'XERODERMAE',
    'XERODERMAS',
    'XERODERMATIC',
    'XERODERMATOUS',
    'XERODERMIA',
    'XERODERMIAS',
    'XERODERMIC',
    'XEROGRAPHER',
    'XEROGRAPHERS',
    'XEROGRAPHIC',
    'XEROGRAPHICALLY',
    'XEROGRAPHIES',
    'XEROGRAPHY',
    'XEROMA',
    'XEROMAS',
    'XEROMATA',
    'XEROMORPH',
    'XEROMORPHIC',
    'XEROMORPHOUS',
    'XEROMORPHS',
    'XEROPHAGIES',
    'XEROPHAGY',
    'XEROPHILE',
    'XEROPHILES',
    'XEROPHILIES',
    'XEROPHILOUS',
    'XEROPHILY',
    'XEROPHTHALMIA',
    'XEROPHTHALMIAS',
    'XEROPHTHALMIC',
    'XEROPHYTE',
    'XEROPHYTES',
    'XEROPHYTIC',
    'XEROPHYTICALLY',
    'XEROPHYTISM',
    'XEROPHYTISMS',
    'XERORADIOGRAPHY',
    'XEROSERE',
    'XEROSERES',
    'XEROSES',
    'XEROSIS',
    'XEROSTOMA',
    'XEROSTOMAS',
    'XEROSTOMATA',
    'XEROSTOMIA',
    'XEROSTOMIAS',
    'XEROTES',
    'XEROTHERMIC',
    'XEROTIC',
    'XEROTRIPSES',
    'XEROTRIPSIS',
    'XEROX',
    'XEROXED',
    'XEROXES',
    'XEROXING',
    'XERUS',
    'XERUSES',
    'XI',
    'XIPHIHUMERALIS',
    'XIPHIPLASTRA',
    'XIPHIPLASTRAL',
    'XIPHIPLASTRALS',
    'XIPHIPLASTRON',
    'XIPHISTERNA',
    'XIPHISTERNUM',
    'XIPHISTERNUMS',
    'XIPHOID',
    'XIPHOIDAL',
    'XIPHOIDS',
    'XIPHOPAGI',
    'XIPHOPAGIC',
    'XIPHOPAGOUS',
    'XIPHOPAGUS',
    'XIPHOPAGUSES',
    'XIPHOPHYLLOUS',
    'XIPHOSURAN',
    'XIPHOSURANS',
    'XIS',
    'XOANA',
    'XOANON',
    'XRAY',
    'XRAYS',
    'XU',
    'XYLAN',
    'XYLANS',
    'XYLEM',
    'XYLEMS',
    'XYLENE',
    'XYLENES',
    'XYLENOL',
    'XYLENOLS',
    'XYLIC',
    'XYLIDIN',
    'XYLIDINE',
    'XYLIDINES',
    'XYLIDINS',
    'XYLITOL',
    'XYLITOLS',
    'XYLOBALSAMUM',
    'XYLOBALSAMUMS',
    'XYLOCARP',
    'XYLOCARPOUS',
    'XYLOCARPS',
    'XYLOCHROME',
    'XYLOCHROMES',
    'XYLOGEN',
    'XYLOGENOUS',
    'XYLOGENS',
    'XYLOGRAPH',
    'XYLOGRAPHED',
    'XYLOGRAPHER',
    'XYLOGRAPHERS',
    'XYLOGRAPHIC',
    'XYLOGRAPHICAL',
    'XYLOGRAPHIES',
    'XYLOGRAPHING',
    'XYLOGRAPHS',
    'XYLOGRAPHY',
    'XYLOID',
    'XYLOIDIN',
    'XYLOIDINE',
    'XYLOIDINES',
    'XYLOIDINS',
    'XYLOL',
    'XYLOLOGIES',
    'XYLOLOGY',
    'XYLOLS',
    'XYLOMA',
    'XYLOMAS',
    'XYLOMATA',
    'XYLOMETER',
    'XYLOMETERS',
    'XYLONIC',
    'XYLONITE',
    'XYLONITES',
    'XYLOPHAGAN',
    'XYLOPHAGANS',
    'XYLOPHAGE',
    'XYLOPHAGES',
    'XYLOPHAGOUS',
    'XYLOPHILOUS',
    'XYLOPHONE',
    'XYLOPHONES',
    'XYLOPHONIC',
    'XYLOPHONIST',
    'XYLOPHONISTS',
    'XYLOPYROGRAPHY',
    'XYLORIMBA',
    'XYLORIMBAS',
    'XYLOSE',
    'XYLOSES',
    'XYLOTOMIES',
    'XYLOTOMIST',
    'XYLOTOMISTS',
    'XYLOTOMOUS',
    'XYLOTOMY',
    'XYLOTYPOGRAPHIC',
    'XYLOTYPOGRAPHY',
    'XYLYL',
    'XYLYLS',
    'XYRIDACEOUS',
    'XYST',
    'XYSTER',
    'XYSTERS',
    'XYSTI',
    'XYSTOI',
    'XYSTOS',
    'XYSTS',
    'XYSTUS'
];

module.exports = {
    xwords
}