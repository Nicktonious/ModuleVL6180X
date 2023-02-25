const ClassVL6180XDefault = require('ModuleVL6180XDefault')._class;
const ClassAppError = require('https://raw.githubusercontent.com/Konkery/ModuleAppError/main/js/module/ModuleAppError.js');

class ClassVL6180X extends ClassVL6180XDefault {
  //_opts: {i2c: I2C1, irqPin: irqPin}
  //TODO: добавить валидацию аргументов пользуясь расширенным классом ошибок
  constructor(_opts){
    super(_opts);
    this.name = 'ClassVL6180X';
  }
};

ClassVL6180X.prototype.testMethod = function(){
  return true;
};

ClassVL6180X.prototype.startDualMeasures = function(){
    setInterval(() => {
        this.range((err, value) => {
            if (err) {
                console.log(Infinity);
            } else {
                console.log(value);
            }
        });
    }, 40);
};

exports = ClassVL6180X;