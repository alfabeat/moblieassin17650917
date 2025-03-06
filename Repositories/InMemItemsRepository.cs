using System.Diagnostics;
using Microsoft.AspNetCore.Http.Features;
using myapp.Models;

namespace myapp.Repositories
{


   
    public class InMemItemsRepository : IUnitRepository
    {
        private readonly List<Unit> units = new(){
            new Unit {Id = Guid.NewGuid(), Name ="commanda", Points= 100, CreatedDate = DateTimeOffset.Now},
            new Unit {Id = Guid.NewGuid(), Name ="1commanda", Points= 120, CreatedDate = DateTimeOffset.Now},
            new Unit {Id = Guid.NewGuid(), Name ="2commanda", Points= 130, CreatedDate = DateTimeOffset.Now}

        }; 
        public IEnumerable<Unit> GetUnits(){
            return units;
        }

        public Unit GetUnit(Guid id)
        {

#pragma warning disable CS8603 // Possible null reference return.
            return units.Where(unit => unit.Id == id).SingleOrDefault();
#pragma warning restore CS8603 // Possible null reference return.

        }

        public void CreateUnit(Unit unit)
        {
            units.Add(unit);
        }

        public void UpdateUnit(Unit unit)
        {
            var index = units.FindIndex(existingUnit => existingUnit.Id == unit.Id);
            units[index]= unit;
        }

        public void DeleateUnit(Guid id)
        {
             var index = units.FindIndex(existingUnit => existingUnit.Id == id);
            units.RemoveAt(index);
        }
    }

}