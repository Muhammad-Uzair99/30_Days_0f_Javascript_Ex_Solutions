/*
    The following is an array of 10 students ages:
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
/*
    Sort the array and find the min and max age
*/
ages.sort();
console.log('Sorted array: ' + ages);

let min = Math.min(...ages);
let max = Math.max(...ages);
console.log(min);
console.log(max);

/*
    Find the median age(one middle item or two middle items divided by two)
*/
if (ages.length%2 == 0) {
    console.log( (ages[(ages.length/2 - 1)] + ages[(ages.length/2)]) / 2 );
} else {
    console.log(ages[(ages.length+1)/2 + 1]);
}

/*
    Find the average age(all items divided by number of items)
*/
let sum = 0;
for(let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let avg = sum / ages.length;
console.log(avg);

/*
    Find the range of the ages(max minus min)
*/
console.log(max - min);

/*
    Compare the value of (min - average) and (max - average), use abs() method 
*/
console.log(Math.abs(min-avg / max-avg));

/*
    Slice the first ten countries from the countries array
*/
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

console.log(countries.slice(0, 9));

/*
    Find the middle country(ies) in the countries array
*/
if (countries.length%2 == 0) {
    console.log(countries[countries.length/2 - 1], countries[countries.length/2]);
} else {
    console.log(countries[(countries.length+1)/2 - 1]);
}

/*
    Divide the countries array into two equal arrays if it is even. If 
    countries array is not even , one more country for the first half.
*/
let countriesA, countriesB;
if (countries.length%2 == 0) {
    countriesA = countries.slice(0, countries.length/2 - 1);
    countriesB = countries.slice(countries.length/2 - 1);
} else {
    countriesA = countries.slice(0, (countries.length+1)/2 - 1);
    countriesB = countries.slice((countries.length+1)/2 - 1);
}

console.log(countriesA, countriesB);