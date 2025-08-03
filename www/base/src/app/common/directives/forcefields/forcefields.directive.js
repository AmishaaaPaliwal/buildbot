/*
 * This file documents the available field types for the Force Scheduler.
 * The actual implementation is now in React components in:
 * buildbot/www/base/src/components/ForceBuildModal/Fields/
 */

// Available field types and their corresponding React components:
const FIELD_TYPES = {
    'text': 'FieldString',
    'textarea': 'FieldText',
    'int': 'FieldInt',
    'bool': 'FieldBoolean',
    'username': 'FieldUserName',
    'list': 'FieldChoiceString',
    'nested': 'FieldNested'
};

// For custom parameter widgets, see examples in:
// - buildbot/www/nestedexample/src/module/nestedexamplefield.directive.js
// - buildbot/www/base/src/components/ForceBuildModal/Fields/ (React components)

// This file serves as documentation for the available field types
// that can be used in Force Scheduler configurations. 