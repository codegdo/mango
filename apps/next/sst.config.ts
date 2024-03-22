import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "next",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        environment: {
          API_URL: process.env.API_URL || ''
        },
        customDomain: {
          domainName: "todaycheckin.com",
          domainAlias: "www.todaycheckin.com",
        },
        cdk: {
          server: {
            logRetention: 30
          }
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
