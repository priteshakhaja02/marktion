import { findParentNodeClosestToPos } from './findParentNodeClosestToPos';
export function findParentNode(predicate) {
    return (pos) => findParentNodeClosestToPos(pos, predicate);
}
