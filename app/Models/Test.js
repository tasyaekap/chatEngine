'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Test extends Model {
    static castDates(field, value) {
        if (field === 'created_at' || 'updated_at') {
            return value.format('YYYY-MM-DD')
        }
        return super.formatDates(field, value)
    }

    static get dates() {
        return super.dates.concat(['created_at', 'updated_at'])
    }
}

module.exports = Test
