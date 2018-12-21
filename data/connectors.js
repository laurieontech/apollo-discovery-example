import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const db = new Sequelize('blog', null, null, {
  dialect: 'sqlite',
  storage: './blog.sqlite'
});

const ProgramModel = db.define('program', {
  title: {
    type: Sequelize.STRING
  },
  abstract: {
    type: Sequelize.STRING
  },
  slot: {
    type: Sequelize.INTEGER
  }
});

const CaseModel = db.define('case', {
  title: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
  clock: {
    type: Sequelize.DOUBLE
  }
});


ProgramModel.hasMany(CaseModel);
CaseModel.belongsTo(ProgramModel);

// modify the mock data creation to also create some views:
casual.seed(123);
db.sync({
  force: true
}).then(() => {
  _.times(10, () => {
    return ProgramModel.create({
      title: casual.title,
      abstract: casual.title,
      slot: casual.integer(0)  
    }).then(program => {
              return program
                .createCase({
                  title: `${program.title} ${casual.integer(0)}`,
                  country: casual.country,
                  year: casual.year,
                  clock: casual.double(0.0)
                })
            });
  });
});

const Program = db.models.program;
const Case = db.models.case;

export {
  Program,
  Case
};