#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { VpcStack } from '../lib/stacks/vpc-stack';

const app = new cdk.App();
const vpcStack = new VpcStack(app, 'VpcStack', {
  // ...Stack.Props
})