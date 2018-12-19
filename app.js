import { EventManager } from 'mjolnir.js';

const em = new EventManager();

console.log('this should NOT be HammerManagerMock');
console.log(em.options.Manager.toString());
