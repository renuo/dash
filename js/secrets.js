// sample usage '#{"sentry": "notsomegasecret"}'
SECRETS = JSON.parse(decodeURIComponent((window.location.hash || '#{}').substr(1)));
