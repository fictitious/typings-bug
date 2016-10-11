import * as sinon from "sinon";
import sinonStubPromise = require("sinon-stub-promise");

sinonStubPromise(sinon);

const mkdirStub = sinon.stub()
  .returnsPromise().resolves(null);
