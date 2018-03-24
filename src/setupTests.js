const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
require('./test/LocalStorageMock')

Enzyme.configure({ adapter: new EnzymeAdapter() });
