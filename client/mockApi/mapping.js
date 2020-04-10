module.exports = req => {
  // TODO: Match to method
  return mappings.find(mappingItem =>
    new RegExp(mappingItem.url).test(req.url)
  );
};

const mappings = [
  {
    method: "POST",
    url: /\/CarDashboard\/services\/auth.ashx/g,
    response: "auth.json"
  },
  {
    url: /\/userdealers\?/g,
    response: "userdealers.json"
  },
  {
    url: /\/userilmdetails\?/g,
    response: "userilmdetails.json"
  },
  {
    url: /\/callDetails\?/g,
    response: "calldetails.json"
  },
  {
    url: /\/messaging\/messagelist\?/g,
    response: "messagelist.json"
  },
  {
    metod: "PATCH",
    url: /\/calldetails\/?/g,
    response: "calldetails.json"
  },
  {
    url: /\/CarDashboard\/API\/SearchServiceBase\/v1\/SearchAdapter/g,
    response: "searchadapter.json"
  },
  // The leads api sends a 404 if no active leads exist,
  // this mocks that instance which should take us to create a new customer with a new lead
  {
    url: /\/leads\?dealerId=6082&contactId=221563847&leadStatusType=ACTIVE/g,
    responseStatus: 404
  },
  {
    url: /\/leads\?/g,
    response: "leads.json"
  },
  {
    url: /\/leadSources\?/g,
    response: "leadSources.json"
  },
  {
    url: /\/permissions\?/g,
    response: "permissions.json"
  },
  {
    method: "POST",
    url: /\/login/g,
    response: "Login.json"
  }
];


