#!/usr/bin/env node
import { greeting, conditionOf, quiz } from '../src/index.js';
import { condition, randomExpressionGen, prepareExp } from '../src/games/even.js';

quiz(greeting(), conditionOf(condition), randomExpressionGen, prepareExp);
