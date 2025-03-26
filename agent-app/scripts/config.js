export default {
    // 'development' or 'production'
    environment: 'production',

    // Using local test servers
    developmentUri: 'https://joshestrada.github.io/rbfcu-c1-genesysapp/agent-app',

    // Publicly accessible location where the admin-app files are hosted.
    // This is different than the Pexip conference node value below.
    prodUri:  'https://joshestrada.github.io/rbfcu-c1-genesysapp/agent-app',

    // Id for the video DOM element. Only change this if you customize index.html.
    videoElementId: "pexip-video-container",

    genesys: {
        // Genesys Cloud region
        // 'mypurecloud.com', 'usw2.pure.cloud', 'mypurecloud.ie', 'euw2.pure.cloud', 'mypurecloud.com.au'
        // See https://help.mypurecloud.com/articles/aws-regions-for-genesys-cloud-deployment/ for all options
        region: 'usw2.pure.cloud',

        // OAuth Client ID
        // Created in "Create a Token Implicit OAuth Grant for Genesys Cloud deployment" step
        oauthClientID: '6f045461-346e-4d65-a278-558ebf775bbd'
    },

    pexip: {
        // Used to identify the conference attendee for proper handling by Pexip Infinity local policy.
        conferencePrefix: "app_",

        // External domain for Pexip Infinity Edge/Transcoding nodes.
        conferenceNode: "pxpconfdfwprd01.connect.rbfcu.org",

        // Conference PIN. Must match the PIN number set by Pexip Infinity local policy for ad-hoc conference creation.
        conferencePin: "2021"
    }
}
