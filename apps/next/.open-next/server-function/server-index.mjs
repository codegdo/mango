export const handler = async (event, context) => {

if (event.rawPath) {
  const routeData = [{"regex":"^/(?:/)?$","logGroupPath":"/8a5edab2/"},{"regex":"^/_not\\-found(?:/)?$","logGroupPath":"/788bf135/_not-found"},{"regex":"^/(.+?)(?:/)?$","logGroupPath":"/d8281e98/...page"},{"regex":"^/dashboard(?:/)?$","logGroupPath":"/89347bb2/dashboard"},{"regex":"^/favicon\\.ico(?:/)?$","logGroupPath":"/b1803648/favicon.ico"},{"regex":"^/login(?:/)?$","logGroupPath":"/7e93fba0/login"},{"regex":"^/signup(?:/)?$","logGroupPath":"/847d8d45/signup"}].find(({ regex, prefix }) => {
    if (regex) return event.rawPath.match(new RegExp(regex));
    if (prefix) return event.rawPath === prefix || (event.rawPath === prefix + "/");
    return false;
  });
  if (routeData) {
    console.log("::sst::" + JSON.stringify({
      action:"log.split",
      properties: {
        logGroupName:"/sst/lambda/" + context.functionName + routeData.logGroupPath,
      },
    }));
  }
}
  const { handler: rawHandler} = await import("./index.mjs");
  return rawHandler(event, context);
};