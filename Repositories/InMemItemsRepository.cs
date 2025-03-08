const units = [
  { id: crypto.randomUUID(), name: "commanda", points: 100, createdDate: new Date() },
  { id: crypto.randomUUID(), name: "1commanda", points: 120, createdDate: new Date() },
  { id: crypto.randomUUID(), name: "2commanda", points: 130, createdDate: new Date() }
];

class InMemItemsRepository {
  getUnits() {
    return units;
  }

  getUnit(id) {
    return units.find(unit => unit.id === id);
  }

  createUnit(unit) {
    units.push(unit);
  }

  updateUnit(unit) {
    const index = units.findIndex(existingUnit => existingUnit.id === unit.id);
    units[index] = unit;
  }

  deleteUnit(id) {
    const index = units.findIndex(existingUnit => existingUnit.id === id);
    units.splice(index, 1);
  }
}
// using System.Diagnostics;
// using Microsoft.AspNetCore.Http.Features;
// using myapp.Models;

// namespace myapp.Repositories
// {


   
//     public class InMemItemsRepository : IUnitRepository
//     {
//         private readonly List<Unit> units = new(){
//             new Unit {Id = Guid.NewGuid(), Name ="commanda", Points= 100, CreatedDate = DateTimeOffset.Now},
//             new Unit {Id = Guid.NewGuid(), Name ="1commanda", Points= 120, CreatedDate = DateTimeOffset.Now},
//             new Unit {Id = Guid.NewGuid(), Name ="2commanda", Points= 130, CreatedDate = DateTimeOffset.Now}

//         }; 
//         public IEnumerable<Unit> GetUnits(){
//             return units;
//         }

//         public Unit GetUnit(Guid id)
//         {

// #pragma warning disable CS8603 // Possible null reference return.
//             return units.Where(unit => unit.Id == id).SingleOrDefault();
// #pragma warning restore CS8603 // Possible null reference return.

//         }

//         public void CreateUnit(Unit unit)
//         {
//             units.Add(unit);
//         }

//         public void UpdateUnit(Unit unit)
//         {
//             var index = units.FindIndex(existingUnit => existingUnit.Id == unit.Id);
//             units[index]= unit;
//         }

//         public void DeleateUnit(Guid id)
//         {
//              var index = units.FindIndex(existingUnit => existingUnit.Id == id);
//             units.RemoveAt(index);
//         }
//     }

// }