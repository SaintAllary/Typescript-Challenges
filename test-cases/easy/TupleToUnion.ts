import { TupleToUnion } from "../../task-types/easy/TupleToUnion";
import { ArrayOfAnyTypes } from "../../test-data/test-types";

type Test = TupleToUnion<ArrayOfAnyTypes>