import { RouteHandlerDescriptor } from './routes';
import { MetadataKeys } from './MetatdataKeys';
import 'reflect-metadata';

export function bodyValidator(...keys: string[]) {
	return function (target: any, key: string, desc: RouteHandlerDescriptor) {
		Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
	};
}
