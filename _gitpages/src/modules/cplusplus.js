import React from 'react';
import classNames from 'classnames';
import ES_1 from '../images/cpp_extrasettings_1.png'
import ES_2 from '../images/cpp_extrasettings_2.gif'
import PT_1 from '../images/cpp_ptcsys1.png'
import GA from '../images/cpp_gridalign.gif'
import SEARCH from '../images/cpp_search.gif'
import LOCKS from '../images/cpp_locks.gif'
import Foldout from './Foldout';

class CPP extends React.Component {
    firstString = "\/\/ List group\r\n        else if(!control.compare(\"listGroup\", Qt::CaseInsensitive))\r\n        {\r\n            QJsonArray children = o[\"children\"].toArray();\r\n            if(!children.isEmpty())\r\n            {\r\n                \/\/ Pre-fetch the entries that are currently in the list, so they can be initialized at the bottom\r\n                QJsonObject entries = retrieve_property(setupTree, name, QVariant()).toJsonObject();\r\n\r\n                \/\/ Initialize the item tree\r\n                QGroupBox *subGroup = new QGroupBox(target);\r\n                subGroup->setTitle(title);\r\n                QLayout* subGroupLayout = new QVBoxLayout(subGroup);\r\n                subGroupLayout->setSizeConstraint(QBoxLayout::SizeConstraint::SetMaximumSize);\r\n\r\n                QGroupBox* itemGroup = new QGroupBox();\r\n                itemGroup->setSizePolicy(QSizePolicy::Maximum, QSizePolicy::MinimumExpanding);\r\n                new QVBoxLayout(itemGroup);\r\n\r\n                QPushButton *addButton = new QPushButton(subGroup);\r\n                addButton->setText(\"+\");\r\n                addButton->setToolTip(\"Add new item\");\r\n                addButton->setObjectName(\"Add item\");\r\n\r\n                bool collapsible = o[\"collapse\"].toBool(false);\r\n                \r\n                \/\/ Because lists can be really long, let\'s add collapse button support\r\n                if (collapsible) {\r\n                    QPushButton *collapseButton = new QPushButton(target);\r\n                    if (o[\"default-collapsed\"].toBool(false)) {\r\n                        itemGroup->setVisible(false);\r\n                        collapseButton->setText(\"Expand list\");\r\n                    } else {\r\n                        collapseButton->setText(\"Collapse list\");\r\n                    }\r\n                    subGroupLayout->addWidget(collapseButton);\r\n                    row++;\r\n\r\n                    QObject::connect(collapseButton, static_cast<void(QPushButton::*)(bool)>(&QPushButton::clicked),\r\n                                     [itemGroup, collapseButton](bool)\r\n                                     {\r\n                                         itemGroup->setVisible(!itemGroup->isVisible());\r\n                                         collapseButton->setText((itemGroup->isVisible() ? \"Collapse list\" : \"Expand list\"));\r\n                                     });\r\n                }\r\n\r\n\r\n                \/\/ Go one layer deeper\r\n                const QString id = setupTree.getPropertyId(name);\r\n                setupTree.m_setupTree.push(name);\r\n\r\n                \/\/ Create the settings group object to organize data\r\n                JsonListSettingsGroup settingsGroup = JsonListSettingsGroup();\r\n                settingsGroup.groupBox = itemGroup;\r\n                settingsGroup.children = children;\r\n                settingsGroup.maxSize = o[\"max-items\"].toInt(0);\r\n                settingsGroup.addButton = addButton;\r\n                m_instantiatedQJsonLists.insert(id, settingsGroup);\r\n\r\n                \/\/ Keep track of the items and their count\r\n                m_setupStack.setValue(setupTree.getPropertyId(\"count\"), 0);\r\n                int maxNum = retrieve_property(setupTree, \"count\", 0).toInt();\r\n                setupTree.m_setupTree.push(\"items\");\r\n\r\n                \/\/ Connect the button\r\n                QObject::connect(addButton, static_cast<void(QPushButton::*)(bool)>(&QPushButton::clicked),\r\n                [setupTree, id, this](bool)\r\n                {\r\n                    AddListElement(setupTree, id);\r\n                    emit settingsChanged();\r\n                });\r\n\r\n                \/\/ Connect the widgets\r\n                subGroupLayout->addWidget(addButton);\r\n                subGroupLayout->addWidget(itemGroup);\r\n                l->addWidget(subGroup, row, 0, 1, 2);\r\n\r\n                \/\/ Add pre-existing elements\r\n                for (int i = 0; i < maxNum; i++) {\r\n                    AddListElement(setupTree, id);\r\n                }\r\n\r\n                \/\/ Emit if pre-existing elements exist\r\n                if (maxNum>0) {\r\n                    emit settingsChanged();\r\n                }\r\n                \/\/ Done\r\n                setupTree.m_setupTree.pop();\r\n                setupTree.m_setupTree.pop();\r\n                row++;\r\n            }\r\n        }"
    secondString = "\r\nvoid JsonSettingsWidget::AddListElement(SetupStack setupTree, QString id) {\r\n    \/\/ Initialize values\r\n    auto settingsGroup = m_instantiatedQJsonLists[id];\r\n    int idx = settingsGroup.size;\r\n    settingsGroup.size++;\r\n    const QString id2 = setupTree.getPropertyId(QString::number(idx));\r\n    setupTree.m_setupTree.pop();\r\n    m_setupStack.setValue(setupTree.getPropertyId(\"count\"), settingsGroup.size);\r\n    setupTree.m_setupTree.push(\"items\");\r\n\r\n    if (settingsGroup.maxSize > 0 && settingsGroup.size == settingsGroup.maxSize) {\r\n        settingsGroup.addButton->setEnabled(false);\r\n    }\r\n\r\n    \/\/ Build the new layout tree\r\n    QFrame* itemSubGroup = new QFrame();\r\n    QLayout* itemSubGroupLayout = new QHBoxLayout(itemSubGroup);\r\n    settingsGroup.groupBox->layout()->addWidget(itemSubGroup);\r\n\r\n    QFrame* childSettings = new QFrame();\r\n    new QGridLayout(childSettings);\r\n    childSettings->setObjectName(id2);\r\n\r\n    QPushButton *remButton = new QPushButton(itemSubGroup);\r\n    remButton->setSizePolicy(QSizePolicy::Fixed, QSizePolicy::Expanding);\r\n    remButton->setFixedWidth(24);\r\n    remButton->setText(\"-\");\r\n    remButton->setToolTip(\"Remove item\");\r\n\r\n    \/\/ Update settingsGroup\r\n    m_instantiatedQJsonLists[id] = settingsGroup;\r\n\r\n    \/\/ Bind the button event\r\n    QObject::connect(remButton, static_cast<void(QPushButton::*)(bool)>(&QPushButton::clicked),\r\n    [setupTree, itemSubGroup, id, this](bool)\r\n    {\r\n        RemoveListElement(setupTree, id, itemSubGroup);\r\n    });\r\n\r\n    \/\/ Link the tree items\r\n    itemSubGroupLayout->addWidget(remButton);\r\n    itemSubGroupLayout->addWidget(childSettings);\r\n\r\n    \/\/ Go down one layer, build the values\r\n    setupTree.m_setupTree.push(QString::number(idx));\r\n    loadLayoutEntries(setupTree, settingsGroup.children, childSettings, settingsGroup.err, settingsGroup.parent);\r\n    setupTree.m_setupTree.pop();\r\n}\r\n\r\nvoid JsonSettingsWidget::RemoveListElement(SetupStack setupTree, QString id, QFrame* itemSubGroup) {\r\n    \/\/ Initialize values\r\n    auto settingsGroup = m_instantiatedQJsonLists[id];\r\n    auto items = settingsGroup.groupBox->children();\r\n    int num = items.indexOf(itemSubGroup) - 1;\r\n    m_instantiatedQJsonLists[id].size--;\r\n    int count = items.count() - 1;\r\n\r\n    if (settingsGroup.maxSize > 0 && m_instantiatedQJsonLists[id].size < settingsGroup.maxSize) {\r\n        settingsGroup.addButton->setEnabled(true);\r\n    }\r\n\r\n    \/\/ Remove the data\r\n    m_setupStack.removeElement(setupTree.getPropertyId(QString::number(num)));\r\n    setupTree.m_setupCache = m_setupStack.m_setupCache;\r\n    setupTree.m_setupTree.pop();\r\n    m_setupStack.setValue(setupTree.getPropertyId(\"count\"), m_instantiatedQJsonLists[id].size);\r\n    setupTree.m_setupTree.push(\"items\");\r\n\r\n    \/\/ Remove the last widget\r\n    QWidget* last = m_instantiatedQJsonLists[id].groupBox->findChild<QWidget*>(setupTree.getPropertyId(QString::number(count-1)), Qt::FindChildrenRecursively);\r\n    m_instantiatedQJsonLists[id].groupBox->layout()->removeWidget(last->parentWidget());\r\n    last->parentWidget()->deleteLater();\r\n\r\n    \/\/ Shift the data one over\r\n    for (int i = num; i < count - 1; i++) {\r\n        QWidget* wid = m_instantiatedQJsonLists[id].groupBox->findChild<QWidget*>(setupTree.getPropertyId(QString::number(i)), Qt::FindChildrenRecursively);\r\n\r\n        setupTree.m_setupTree.push(QString::number(i));\r\n        loadLayoutEntries(setupTree, settingsGroup.children, wid, settingsGroup.err, settingsGroup.parent);\r\n        setupTree.m_setupTree.pop();\r\n    }\r\n\r\n    emit settingsChanged();\r\n}"
    thirdString = "\r\n\r\nstatic void make_list_defaults_numeric_list(nlohmann::json& dst, nlohmann::json& src) {\r\n    for (auto& kvp : src.items())\r\n    {\r\n        nlohmann::json entry = nlohmann::json();\r\n        entry[\"k\"] = kvp.key();\r\n        if (kvp.value().is_object() || kvp.value().is_array()) {\r\n            nlohmann::json& childObj = nlohmann::json();\r\n            make_list_defaults_numeric_list(childObj, kvp.value());\r\n            entry[\"v\"] = childObj;\r\n        }\r\n        else {\r\n            entry[\"v\"] = kvp.value();\r\n        }\r\n        dst.push_back(entry);\r\n    }\r\n}\r\n\r\n....\r\n\r\n        else if (SDL_strncasecmp(control.c_str(), \"listGroup\", 9) == 0)\r\n        {\r\n            if (entry.find(\"children\") == entry.end())\r\n                continue; \/\/ invalid entry: missing required key\r\n\r\n            append_type_entry(typetree, path_arr, \"list\", name);\r\n\r\n            nlohmann::json path_arr_next = path_arr;\r\n            nlohmann::json fields = nlohmann::json();\r\n\r\n            \/\/ Store the default values for the children\r\n            path_arr_next.push_back(name);\r\n            read_layout_branches(typetree, fields, entry[\"children\"], path_arr_next);\r\n\r\n            nlohmann::json fieldsList = nlohmann::json();\r\n            \/\/ Prevent a pairs call in the lua code by getting a numeric list here\r\n            make_list_defaults_numeric_list(fieldsList, fields);\r\n            dst[name][\"defaults\"] = fieldsList;\r\n            dst[name][\"count\"] = 0;\r\n            dst[name][\"items\"] = nlohmann::json::object(); \/\/ TODO: In a future version, allow for adding some list elements by default.\r\n        }"
    fourthString = "local function fillListDefaults(defaults, overrides)\r\n\tfor k,v in ipairs(defaults) do\r\n\t\tif type(v.v) == \"table\" then\r\n\t\t\toverrides[v.k] = {}\r\n\t\t\tfillListDefaults(v.v, overrides[v.k])\r\n\t\telse\r\n\t\t\tif overrides[v.k] == nil then\r\n\t\t\t\toverrides[v.k] = v.v\r\n\t\t\tend\r\n\t\tend\r\n\tend\r\nend\r\n\r\nregisterType(\"list\", function(obj)\r\n\t\tlocal l = {}\r\n\t\tlocal i = 0\r\n\r\n\t\tfor i=0, obj.count - 1 do\r\n\t\t\tif obj.items[tostring(i)] then\r\n\t\t\t\tlocal target = {}\r\n\t\t\t\tfillListDefaults(obj.defaults, obj.items[tostring(i)])\r\n\t\t\t\ttable.insert(l, obj.items[tostring(i)])\r\n\t\t\tend\r\n\t\tend\r\n\t\treturn l\r\n\tend)"
    fifthString = "void MainWindow::customGrid(bool)\r\n{\r\n    QAction* action = (QAction*)sender();\r\n    int gridSize = action->data().toInt();\r\n\r\n    if(gridSize >= 0)\r\n        GlobalSettings::LvlOpts.grid_override = (gridSize > 0);\r\n\r\n    if(gridSize != 0)\r\n    {\r\n        if(gridSize == -1)\r\n        {\r\n            bool ok = 0;\r\n            gridSize = QInputDialog::getInt(this,\r\n                                            tr(\"Custom align grid size\"),\r\n                                            tr(\"Please enter grid alignment size:\"),\r\n                                            32, 0, 2147483647, 1, &ok);\r\n            if(!ok)\r\n                return;\r\n\r\n            GlobalSettings::LvlOpts.grid_override = (gridSize > 0);\r\n        }\r\n        else if(gridSize == -2) \/\/ Next grid offset\r\n        {\r\n            if(!GlobalSettings::LvlOpts.grid_override) \/\/ 0\r\n            {\r\n                GlobalSettings::LvlOpts.grid_override = true;\r\n                gridSize = 1;\r\n                showStatusMsg(tr(\"Grid size: changed into %1x%1\").arg(gridSize), 2000);\r\n            }\r\n            else\r\n            {\r\n                gridSize = GlobalSettings::LvlOpts.customGrid.width();\r\n                gridSize *= 2;\r\n                if(gridSize > 128)\r\n                {\r\n                    GlobalSettings::LvlOpts.grid_override = false;\r\n                    showStatusMsg(tr(\"Grid size: restored default\"), 2000);\r\n                }\r\n                else\r\n                {\r\n                    showStatusMsg(tr(\"Grid size: changed into %1x%1\").arg(gridSize), 2000);\r\n                }\r\n            }\r\n        }\r\n        else if(gridSize == -3) \/\/ Previous grid offset\r\n        {\r\n            if(!GlobalSettings::LvlOpts.grid_override) \/\/ 0\r\n            {\r\n                GlobalSettings::LvlOpts.grid_override = true;\r\n                gridSize = 128;\r\n                showStatusMsg(tr(\"Grid size: changed into %1x%1\").arg(gridSize), 2000);\r\n            }\r\n            else\r\n            {\r\n                gridSize = GlobalSettings::LvlOpts.customGrid.width();\r\n                if(gridSize < 2)\r\n                {\r\n                    GlobalSettings::LvlOpts.grid_override = false;\r\n                    showStatusMsg(tr(\"Grid size: restored default\"), 2000);\r\n                }\r\n                else\r\n                {\r\n                    gridSize \/= 2;\r\n                    showStatusMsg(tr(\"Grid size: changed into %1x%1\").arg(gridSize), 2000);\r\n                }\r\n            }\r\n        }\r\n\r\n        GlobalSettings::LvlOpts.customGrid.setWidth(gridSize);\r\n        GlobalSettings::LvlOpts.customGrid.setHeight(gridSize);\r\n    }\r\n\r\n    if(activeChildWindow() == WND_Level)\r\n    {\r\n        LevelEdit *e = activeLvlEditWin();\r\n        assert(e);\r\n        e->scene->m_opts.grid_override = GlobalSettings::LvlOpts.grid_override;\r\n        e->scene->m_opts.customGrid = GlobalSettings::LvlOpts.customGrid;\r\n    }\r\n    else\r\n    if(activeChildWindow() == WND_World)\r\n    {\r\n        WorldEdit *e = activeWldEditWin();\r\n        assert(e);\r\n        e->scene->m_opts.grid_override = GlobalSettings::LvlOpts.grid_override;\r\n        e->scene->m_opts.customGrid = GlobalSettings::LvlOpts.customGrid;\r\n    }\r\n}\r\n\r\n\r\n....\r\n\r\nQAction *action = ui->menuSetGridSize->addAction(tr(\"Default\"));\r\n        action->setData(0);\r\n        connect(action, &QAction::triggered, this, &MainWindow::customGrid);\r\n        ui->menuSetGridSize->addSeparator();\r\n\r\n        action = ui->menuSetGridSize->addAction(\"2 x 2\");\r\n        action->setData(2);\r\n        connect(action, &QAction::triggered, this, &MainWindow::customGrid);\r\n\r\n        action = ui->menuSetGridSize->addAction(\"4 x 4\");\r\n        action->setData(4);\r\n        connect(action, &QAction::triggered, this, &MainWindow::customGrid);\r\n\r\n        action = ui->menuSetGridSize->addAction(\"8 x 8\");\r\n        action->setData(8);\r\n        connect(action, &QAction::triggered, this, &MainWindow::customGrid);\r\n\r\n        action = ui->menuSetGridSize->addAction(\"16 x 16\");\r\n        action->setData(16);\r\n        connect(action, &QAction::triggered, this, &MainWindow::customGrid);\r\n\r\n        action = ui->menuSetGridSize->addAction(\"32 x 32\");\r\n        action->setData(32);\r\n        connect(action, &QAction::triggered, this, &MainWindow::customGrid);\r\n\r\n        action = ui->menuSetGridSize->addAction(\"64 x 64\");\r\n        action->setData(64);\r\n        connect(action, &QAction::triggered, this, &MainWindow::customGrid);\r\n\r\n        action = ui->menuSetGridSize->addAction(\"128 x 128\");\r\n        action->setData(128);\r\n        connect(action, &QAction::triggered, this, &MainWindow::customGrid);\r\n\r\n        action = ui->menuSetGridSize->addAction(tr(\"Custom...\"));\r\n        action->setData(-1);\r\n        connect(action, &QAction::triggered, this, &MainWindow::customGrid);\r\n\r\n        ui->menuSetGridSize->addSeparator();\r\n\r\n        action = ui->menuSetGridSize->addAction(tr(\"Next grid size\"));\r\n        action->setData(-2);\r\n        action->setShortcut(QKeySequence(Qt::Key_BracketRight));\r\n        connect(action, &QAction::triggered, this, &MainWindow::customGrid);\r\n\r\n        action = ui->menuSetGridSize->addAction(tr(\"Previous grid size\"));\r\n        action->setData(-3);\r\n        action->setShortcut(QKeySequence(Qt::Key_BracketLeft));\r\n        connect(action, &QAction::triggered, this, &MainWindow::customGrid);\r\n\r\n        QToolButton* button = (QToolButton*)ui->EditionToolBar->widgetForAction(ui->actionGridCustom);\r\n        button->setPopupMode(QToolButton::InstantPopup);\r\n        button->setMenu(ui->menuSetGridSize);"
    sixthString = "bool TilesetItemBox::isItemFoundBySearch(int type, uint id, QString searchText, QGraphicsScene* scene) {\r\n    QString data = Items::getSearchData(type, id, scene);\r\n    if (data.contains(searchText, Qt::CaseInsensitive) || id == searchText.toUInt()) {\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\n....\r\n\r\nfor (int i = 0; i < ts.items.size(); ++i) {\r\n                        int type = ts.items[i].type;\r\n                        if (type == -1) {\r\n                            type = ts.type;\r\n                        }\r\n                    if (TilesetItemBox::isItemFoundBySearch(type, ts.items[i].id, ui->customTilesetSearchEdit->text(), scene)) {\r\n                        includeTilesetInSearch = true;\r\n                        break;\r\n                    }\r\n                }\r\n                if(!includeTilesetInSearch && !ts.tileSetName.contains(ui->customTilesetSearchEdit->text(), Qt::CaseInsensitive))\r\n                    continue;\r\n\r\n....\r\n\r\ntButton->applyItem(type, (int)item.id, -1, -1, !TilesetItemBox::isItemFoundBySearch(type, ts.items[k].id, ui->customTilesetSearchEdit->text(), scene));\r\n\r\n....\r\n\r\nvoid TilesetItemButton::applyItem(const int &type_i, const int &id, const int &width, const int &height, const bool notInSearch)\r\n{\r\n    int wid = (width == -1 ? contentsRect().width() : width);\r\n    int hei = (height == -1 ? contentsRect().height() : height);\r\n    QPixmap p;\r\n    Items::getItemGFX(type_i, id, p, scn, false, QSize(wid, hei));\r\n    setToolTip(Items::getTilesetToolTip(type_i, id, scn));\r\n\r\n    if (notInSearch) {\r\n        QImage image = p.toImage();\r\n        QImage grayImage = image.convertToFormat(QImage::Format_Grayscale16);\r\n        p = QPixmap::fromImage(grayImage);\r\n    }\r\n\r\n    if(p.isNull())\r\n    {\r\n        m_drawItem = QPixmap(wid, hei);\r\n        return;\r\n    }\r\n    m_drawItem = p;\r\n    m_id = (unsigned int)id;\r\n    m_itemType = static_cast<ItemTypes::itemTypes>(type_i);\r\n}"
    seventhString = "void LvlBaseItem::setLocked(bool lock)\r\n{\r\n    this->setOpacity(lock ? GlobalSettings::LvlItemDefaults.LockedItemOpacity : 1);\r\n    this->setFlag(QGraphicsItem::ItemIsSelectable, !lock);\r\n    this->setFlag(QGraphicsItem::ItemIsMovable, !lock);\r\n    m_locked = lock;\r\n}"
    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Projects</h1>
                <h2 className="typewriter">Free-Time Project: Moondust Editor Fork</h2>
                <div className = "timelineEntry">
                    <h2>
                        What is it?
                    </h2>

                    <p>
                        The Moondust Editor is an open-source generic 2D Platformer Level Editing Tool written in <span className="hl">Qt with C++</span>. It focuses on flexibility, allowing users to use config packs to customize the content of the editor. However, due to slow development, UX in specific game engine communities relying on the editor has been suffering. This inspired me to create the fork, with a <span className="hl">focus on implementing specific solutions for this engine</span>, with the possibility of backporting them to the main repository in the future.
                    </p>

                    <h2>
                        Recent work
                    </h2>

                    <h4>
                        JSON-defined settings lists
                    </h4>

                    <p>
                        Objects can be given custom meta properties defined through so-called "extra-settings" JSON definitions. The input from the editor is routed to the engine's lua scripting interface and populated with the editor's default values. In the past years, <span className="hl">the wish for lists defined in the JSON</span> has been popular in the community.
                    </p>

                    <div style={{textAlign: "center", margin: "auto"}}>
                        <img style={{alignSelf:"center"}} src={ES_1} alt="Extra settings"/>
                        <div className="dividerH"></div>
                        <img style={{alignSelf:"center"}} src={ES_2} alt="Extra settings list"/>
                        <p>An editor configuration for objects via extra-settings JSON definition.</p>
                    </div>
                    <Foldout name = "List Element Code (C++)">
                        <pre><code className="language-cpp">
                        {this.firstString}
                        </code></pre>
                    </Foldout>
                    <Foldout name = "Adding/Removing elements (C++)">
                        <pre><code className="language-cpp">
                        {this.secondString}
                        </code></pre>
                    </Foldout>
                    <p>
                        The biggest challenge in implementing this feature was properly maintaining the tree of JSON values stored in m_setupTree. <span className="hl">The lists are being saved as a JSON object</span> rather than a JSON array, which is not ideal. This is due to prior attempts to add support for numeric indices in the m_setupTree showing that doing so would make the code unreadable and unmaintainable, unless it was re-written from scratch. In other words, <span className="hl">this is a necessary evil to keep the code clean and allow development to proceed.</span>
                    </p>
                    <p>
                        After saving the level and running the engine, the default values have to be merged with the non-default values saved in the level file. This happens in two steps. First, before reading the level file, <span className="hl">the default values are gathered and inserted into a numeric list</span>, storing the key and default value. This is done so that in step 2, in Lua, this list can be iterated over via ipairs, <span className="hl">giving a performance boost</span> thanks to LuaJIT compilation kicking in.
                    </p>
                    <Foldout name = "Step 1: Getting the default element list (C++)">
                        <pre><code className="language-cpp">
                        {this.thirdString}
                        </code></pre>
                    </Foldout>
                    <Foldout name = "Step 2: Merging the default element list with the level file's saved data (Lua)">
                        <pre><code className="language-lua">
                        {this.fourthString}
                        </code></pre>
                    </Foldout>
                    <p>
                        The reason the merge of default values and overrides is necessary is to <span className="hl">reduce redundancy in user-defined default properties and human error</span>. If the defaults had to be defined in both the lua code and the JSON file, the potential for human error would increase. By having the default values and overrides always available, <span className="hl">users don't have to worry about any of their defined settings variables ever being "nil"</span>.
                    </p>

                    <h4>
                        UX Polish
                    </h4>
                    <p>
                        Users using the editor have voiced concerns about certain actions taking a long time, or being inconvenient to set up. The individual implementations for these aren't overly complex, so this section is a quick sweep over a couple of major ones.
                    </p>
                    <div className = "speedRound">
                        <div style={{textAlign: "center", margin: "auto"}}>
                            <img style={{alignSelf:"center"}} src={GA} alt="Grid Align"/>
                            <Foldout name = "Code (C++)" style={{display: "inline-block"}}>
                                <pre><code className="language-cpp">
                                {this.fifthString}
                                </code></pre>
                            </Foldout>
                            <p>Instead of just turning grid snap on/off, users can swap grid snap settings from the top bar.</p>
                        </div>
                    </div>
                    <div className = "speedRound">
                        <div style={{textAlign: "center", margin: "auto"}}>
                            <img src={SEARCH} alt="Search"/>
                            <Foldout name = "Code (C++)" style={{display: "inline"}}>
                                <pre><code className="language-cpp">
                                {this.sixthString}
                                </code></pre>
                            </Foldout>
                            <p>The editor has a ton of tilesets, and the ability to create custom ones. The search bar can find objects by name, index and description.</p>
                        </div>
                    </div>
                    <div className = "speedRound">
                        <div style={{textAlign: "center", margin: "auto"}}>
                            <img style={{alignSelf:"center"}} src={LOCKS} alt="Lock Opacity"/>
                            <Foldout name = "Code (C++)" style={{display: "inline-block"}}>
                                <pre><code className="language-cpp">
                                {this.seventhString}
                                </code></pre>
                            </Foldout>
                            <p>I have expanded the "lock/unlock" behaviour of object types to optionally fade all objects of that type, letting users more easily interact with objects that may be hidden behind others.</p>
                        </div>
                    </div>
                </div>
                <h2 className="typewriter">Software Created in Unreal Engine for Client Companies</h2>
                <div className = "timelineEntry">
                    <h2>
                        What is it?
                    </h2>
                    <p>
                        At my previous job at Petricore Systems (2018-2022), we created (beside mobile and web applications using Unity) <span className="hl">Desktop and VR applications for business clients using Unreal Engine 4</span>. While the applications are under NDA and I can't go into detail here, I want to highlight some projects and my involvement.
                    </p>
                    <h2>
                        Engine Interop Minigame
                    </h2>
                    <p>
                        To illustrate the company's work at an expo, we worked on an application that <span className="hl">combined Unreal and WPF applications in a gamified space</span>. The focus of this application was to highlight the possibilities that arise when letting independent systems communicate with each other.
                    </p>
                    <div style={{textAlign: "center", margin: "auto"}}>
                        <img style={{alignSelf:"center"}} src={PT_1} alt="Layout of the app"/>
                        <p>This image shows how the 3 applications "App 1", "App 2" and "Coordinator" communicated with each other.</p>
                    </div>
                    <p>
                        This project's core consisted of 3 applications. One is a VR game in Unreal, in which players are mining for crystals. By inserting them into a minecart, they could send them to the Coordinator application, a desktop app written in C# WPF.
                    </p>
                    <p>
                        The coordinator views an inventory of all items and the connected components. It is possible to connect multiple instances of the App 1 and App 2 applications. By pressing buttons on the coordinator, crystals can be sent to the Factory (App 2), and the minecart can be sent back to the mine.
                    </p>
                    <p>
                        The factory receives crystals, and players have to process them to refined materials using a top-down, overcooked-style gameplay environment in which items are transported between conveyor belts and through ovens. Once the items reach the other side, they are sent back to the Coordinator App.
                    </p>
                    <p>
                        My main role in the project was <span className="hl">setting up the communication backend in all 3 applications, as well as writing the entire Coordinator application. I also wrote a networking system that is shared between the Mine and Factory applications</span>, through which arbitrary item data can be sent and received. Additionally, <span className="hl">I assisted junior developers with the interaction code for the VR Mine, and helped on the spline-based conveyors of the Factory</span>.
                    </p>
                    <p>
                        The project was a big hit at the convention, conveying the ability of our team clearly to potential clients, and <span className="hl">the company saw a big increase in requests following the event</span>.
                    </p>
                    <h2>
                        Object positioning in VR
                    </h2>
                    <p>
                        One of our clients was a distributor of large objects (desks, shelves) to other companies, and wanted to get a view of the room and how their items look in it before beginning production to cut production costs and room for error. For this project, we got 3D scans of the target environments and items, and turned them into 3D scenes and movable objects in Unreal. <span className="hl">I was in charge of moving and snapping logic, as well as implementing UI displays for margins between objects and walls</span>, so the client could measure the setup.
                    </p>
                </div>
            </div>
        )
    }
}

export default CPP;