import { getMarkAttributes } from './getMarkAttributes';
import { getNodeAttributes } from './getNodeAttributes';
import { getSchemaTypeNameByName } from './getSchemaTypeNameByName';
export function getAttributes(state, typeOrName) {
    const schemaType = getSchemaTypeNameByName(typeof typeOrName === 'string' ? typeOrName : typeOrName.name, state.schema);
    if (schemaType === 'node') {
        return getNodeAttributes(state, typeOrName);
    }
    if (schemaType === 'mark') {
        return getMarkAttributes(state, typeOrName);
    }
    return {};
}
