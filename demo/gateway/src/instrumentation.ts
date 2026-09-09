import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { UndiciInstrumentation } from '@opentelemetry/instrumentation-undici';
import { NodeSDK } from '@opentelemetry/sdk-node';
import {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-base';

const sdk = new NodeSDK({
  serviceName: 'demo-gateway',
  spanProcessors: [
    new SimpleSpanProcessor(
      new ConsoleSpanExporter(),
    ),
  ],
  instrumentations: [
    new HttpInstrumentation(),
    new ExpressInstrumentation(),
    new UndiciInstrumentation(),
  ],
});

sdk.start();
