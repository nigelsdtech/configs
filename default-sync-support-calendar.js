var cfg = require('config');
var defer = require('config/defer').deferConfig;

module.exports = {

  calendars: {
    support: {
      calendarId:     "openbet.com_372ghtehkafthoos1i3siijdp0@group.calendar.google.com",
      usernameSearch: "ndsouza"
    },
    workPrimary: {
      calendarId: "primary",
      attendees: [
        {
          email:          "stephen.dsouza@openbet.com",
          displayName:    "Stephen D'Souza",
          responseStatus: "accepted",
          self:           true,
          organizer:      true
        },
        {
          email:       "nigelsd@gmail.com",
          displayName: "Nigel Stephen D'Souza"
        }
      ]
    }
  }

} 
