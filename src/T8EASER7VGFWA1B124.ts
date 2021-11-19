
window.Smallchat = {
  config: {
    slackTeamId: "T8EASER7V",
    scChannelId: "-LXqp-90UWXcpHp-vZuM",
    slackChannelId: "GFWA1B124",
    uid: "-LXqoj4dgeBcQ2i3dO68",
    planId: null,
    accountCreated: 1549255504391
  },
  appearance: {
    brand_color: "#444944",
    contact_dismissible: false,
    contact_enabled: true,
    contact_field_label: "Email",
    contact_immediately: false,
    contact_prompt: "Add your name and email, so that I can keep in touch:",
    contact_reply:
      "Thanks for reaching out {{name}}, let's see if anybody is available...",
    custom_css: "",
    hide_logo: false,
    hide_team_icon: false,
    launcher_pos: "right",
    launcher_prompt: "",
    launcher_type: "button",
    messenger_blank: "Send a message, and I will reply as soon as I can.",
    messenger_entry: "Send me a message...",
    messenger_prompt: "Message Sherwin!",
    name_field_label: "Name",
    offline_greeting:
      "Looks like nobody is online at the moment, but I should be getting an email with your information and I can contact you back.",
    text_color: "#FFFFFF"
  },
  behavior: {
    avatar_config: 0,
    friday: { from: "9:00", to: "21:00" },
    monday: { from: "9:00", to: "21:00" },
    operating_hours: true,
    saturday: { from: "13:00", to: "16:00" },
    sunday: { from: "13:00", to: "16:00" },
    thursday: { from: "9:00", to: "21:00" },
    timezone: "America/New_York",
    tuesday: { from: "9:00", to: "21:00" },
    wednesday: { from: "9:00", to: "21:00" }
  }
};
window.addEventListener(
  "load",
  function() {
    var styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.href = "./messenger.css";
    document.head.appendChild(styles);
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://static.small.chat/messenger.js";
    document.body.appendChild(script);
  },
  false
);
