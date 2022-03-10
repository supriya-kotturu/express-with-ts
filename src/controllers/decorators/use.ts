import { MetadataKeys } from './MetatdataKeys';
import { RequestHandler } from 'express';
import { RouteHandlerDescriptor } from './routes';
import 'reflect-metadata';

export function use(middleware: RequestHandler) {
	return function (target: any, key: string, desc: RouteHandlerDescriptor) {
		const middlewares =
			Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

		Reflect.defineMetadata(
			MetadataKeys.middleware,
			[...middlewares, middleware],
			target,
			key
		);
	};
}
