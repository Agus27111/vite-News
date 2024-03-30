
function Units() {
  return (
    <div>
         <select className="units">
                    <option value="text" className="unitsName">
                      Kg
                    </option>
                    <option value="text" className="unitsName">
                      Pcs
                    </option>
                    <option value="text" className="unitsName custom">
                      <input type="text" />
                    </option>
                  </select>
    </div>
  )
}

export default Units