import * as cdk from 'aws-cdk-lib';
import { CloudFrontWebDistribution } from 'aws-cdk-lib/aws-cloudfront';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { Bucket, BucketAccessControl } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';


export class AwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // Create an S3 bucket to host your Next.js app
    const bucket = new Bucket(this, 'NextjsBucket', {
      accessControl: BucketAccessControl.PUBLIC_READ,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
    });

    // Create a CloudFront distribution for the bucket
    const distribution = new CloudFrontWebDistribution(this, 'NextjsDistribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket,
          },
          behaviors: [{ isDefaultBehavior: true }],
        },
      ],
    });

    // Define your domain and DNS settings
    const hostedZone = HostedZone.fromLookup(this, 'HostedZone', {
      domainName: 'example.com', // Replace with your domain name
    });

    // Create a DNS record to map your domain to the CloudFront distribution
    new ARecord(this, 'AliasRecord', {
      zone: hostedZone,
      recordName: 'www', // Replace with your desired subdomain
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    });
  }
}
