angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'              : 'GDG Eskisehir',
        'id'                : '115602346615910585045',
        'googleApi'         : 'AIzaSyC0aDq5COgY4tfTXY2vNs3-UrdmKeIbuL0',
        'pwaId'             : '5915725140705884785', // Picasa Web Album id, must belong to Google+ id above
        'domain'            : 'http://www.gdgeskisehir.com',
        'twitter'           : 'GdgEskisehir',
        'facebook'          : 'GdgEskisehir',
        'slackRegistration' : 'https://gdgeskisehir.herokuapp.com',

        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, d MMMM y - h:mm a',
        'cover' : {
            title: 'Android Development for Beginners',
            subtitle: 'Google Developers Study Jams is a free series of global, community-run, in-person study groups.',
            button: {
                text: 'Learn More',
                url: 'http://developerstudyjams.com/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        },
        'HUB_IP': 'https://hub.gdgx.io'
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
