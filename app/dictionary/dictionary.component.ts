import { DICTIONARY } from '../data/data-test';
import { Component } from '@angular/core';
import { Dictionary, RecordDictionary } from '../data/dictionary'

@Component({
    moduleId: module.id,
    selector: 'dictionary',
    templateUrl: 'dictionary.component.html',
    styleUrls: ['dictionary.component.css']
})
export class DictionaryComponent {
    exampleDictionary: Dictionary = DICTIONARY;
    newRecord: RecordDictionary = new RecordDictionary('','');

    delete (record: RecordDictionary) {
        let records: RecordDictionary[] = this.exampleDictionary.getRecords();
        records.splice(records.indexOf(record), 1);
    }

    addNewRecord(record: RecordDictionary) {
        console.log((record.nameComponent != '') + ' && '
                     + (record.nameEntity != '') + ' : '
                     + record.nameComponent != '' && record.nameEntity != '');
        if(record.nameComponent != '' && record.nameEntity != '') {
            this.exampleDictionary.pushNewRecord(this.newRecord);
            this.newRecord = new RecordDictionary('','');
        }
    }
}